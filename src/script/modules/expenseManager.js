const Transaction = require("./transaction");
const ExpenseType = require("./expenseType");
const { v4: uuidv4 } = require("uuid");
class ExpenseManager {
	constructor(mode) {
		if ("test" == mode) {
			this.testMode = true;
		} else {
			this.testMode = false;
		}
		this.transactionList = [];
		this.id = 0;
	}
	addTransaction(amount, message, createdDate) {
		if (isNaN(amount)) {
			throw `transaction amount not a number ${amount}`;
		}
		if (amount == 0) {
			throw `transaction amount 0 ${amount}`;
		}
		let type =
			amount > 0
				? ExpenseType.POSITIVE_EXPENSE
				: ExpenseType.NEGATIVE_EXPENSE;
		amount = Math.abs(amount);

		let transaction = new Transaction(
			amount,
			message,
			type,
			this.testMode ? "1234" : uuidv4(),
			createdDate
		);
		this.transactionList.push(transaction);
	}
	getTransactions() {
		return this.transactionList;
	}
	toHTML() {
		let innerH = this.transactionList
			.filter((t) => !t.deleted)
			.map((t) => t.toHTML())
			.reduce((a, b) => a + b, "");
		return `<table class="transactionTable">${innerH}</table>`;
	}
	completeAccountHTML() {
		let currentBallance = this.getBallance();
		return `<div class="ballanceContainer">
                    <div class="ballanceMessage">
                        your current ballance
                    </div>
                    <div class="ballance">
                        <span class="money"><h3>${this.getBallance()}</h3></span>
                    </div>
                    <div class="incomeVsExpenseContainer">
                        <div class="ieContainer">
                            <span class="money possitive">${this.getPossitiveBallance()}</span>
                        </div>
                        <div class="ieContainer">
                            <span class="money negative">${this.getNegativeBallance()}</span>
                        </div>
                    </div>
                </div>
                <div class="transactionContainer">
                    <div class="transactionMainMessage">
                        <h5>your transactions</h5>
                    </div>
                    <div class="transactionList">
                        ${this.toHTML()}
                    </div>
                </div>`;
	}
	getBallance() {
		let totalBallance = this.transactionList
			.filter((t) => !t.deleted)
			.map((a) => {
				if (a.type == ExpenseType.NEGATIVE_EXPENSE) {
					return -a.amount;
				} else return a.amount;
			})
			.reduce((a, b) => a + b, 0);
		return totalBallance;
	}
	getPossitiveBallance() {
		let totalBallance = this.transactionList
			.filter((t) => !t.deleted)
			.filter((t) => t.type == ExpenseType.POSITIVE_EXPENSE)
			.map((a) => a.amount)
			.reduce((a, b) => a + b, 0);
		return totalBallance;
	}
	getNegativeBallance() {
		let totalBallance = this.transactionList
			.filter((t) => !t.deleted)
			.filter((t) => t.type == ExpenseType.NEGATIVE_EXPENSE)
			.map((a) => a.amount)
			.reduce((a, b) => a + b, 0);
		return totalBallance;
	}
	serialize() {
		return JSON.stringify(this.transactionList);
	}
	deSerialize(seiralData) {
		if (seiralData == null || seiralData == undefined || seiralData == "") {
			return;
		}
		let data = JSON.parse(seiralData);
		for (let { amount, type, message, id, createDate, deleted } of data) {
			let transactionType =
				type == 1
					? ExpenseType.POSITIVE_EXPENSE
					: ExpenseType.NEGATIVE_EXPENSE;
			let transaction = new Transaction(
				amount,
				message,
				transactionType,
				id,
				createDate,
				deleted
			);
			this.transactionList.push(transaction);
		}
	}
	deleteTransaction(transactionId) {
		this.transactionList.find((t) => t.id == transactionId).deleted = true;
	}
}

module.exports = ExpenseManager;
