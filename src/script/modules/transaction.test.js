const Transaction = require("./transaction");
const ExpenseType = require("./expenseType");
const { v4: uuidv4 } = require("uuid");
//<tr class="transactionRow"><td class="transactionAmount possitive">100</td><td class="transactionMessage"><span>message</span></td></tr>

//
const testDate = new Date("2020-06-22");
const testDateStr = "22-Jun-2020";

test('create new Transaction with amount 100 message "message"', () => {
	expect(
		new Transaction(
			100,
			"message",
			ExpenseType.POSITIVE_EXPENSE,
			uuidv4(),
			testDate
		)
	);
});

test('create new Transaction with amount 100 message "message" and check response of toHTML()', () => {
	expect(
		new Transaction(
			100,
			"message",
			ExpenseType.POSITIVE_EXPENSE,
			"1234",
			testDate
		).toHTML()
	).toBe(
		`<tr class="transactionRow"><td class="delete" idValue="1234"></td><td class="transactionAmount possitive">100</td><td class="transactionMessage"><span>message</span></td><td class="transactionDate"><span>${testDateStr}</span></td></tr>`
	);
});
test('create new Transaction with amount -100 message "message" and check response of toHTML()', () => {
	expect(
		new Transaction(
			100,
			"message",
			ExpenseType.NEGATIVE_EXPENSE,
			"1234",
			testDate
		).toHTML()
	).toBe(
		`<tr class="transactionRow"><td class="delete" idValue="1234"></td><td class="transactionAmount negative">100</td><td class="transactionMessage"><span>message</span></td><td class="transactionDate"><span>${testDateStr}</span></td></tr>`
	);
});

test("check date format", () => {
	expect(
		new Transaction(
			100,
			"message",
			ExpenseType.NEGATIVE_EXPENSE,
			"1234",
			new Date("2020-06-22")
		).getFormattedDate()
	).toBe("22-Jun-2020");
});
