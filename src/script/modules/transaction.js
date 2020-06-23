const TransactionType = require("./expenseType");
class Transaction {
	constructor(amount, message, transactionType, id, createdDate, deleted) {
		this.amount = amount;
		this.message = message;
		this.type = transactionType;
		this.id = id;
		if (createdDate == undefined) {
			this.createDate = new Date().getTime();
		} else {
			this.createDate = createdDate;
		}
		if (deleted == true) {
			this.deleted = true;
		} else {
			this.deleted = false;
		}
	}
	toHTML() {
		let type =
			this.type == TransactionType.NEGATIVE_EXPENSE
				? "negative"
				: "possitive";
		return `<tr class="transactionRow"><td class="delete" idValue="${
			this.id
		}"></td><td class="transactionAmount ${type}">${
			this.amount
		}</td><td class="transactionMessage"><span>${
			this.message
		}</span></td><td class="transactionDate"><span>${this.getFormattedDate()}</span></td></tr>`;
	}
	getFormattedDate() {
		let d = new Date(this.createDate);
		const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
		const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
		const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
		return `${da}-${mo}-${ye}`;
	}
}
module.exports = Transaction;
