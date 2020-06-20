const Transaction = require('./transaction')
const ExpenseType =  require('./expenseType')
const { v4: uuidv4 } = require('uuid');
//<tr class="transactionRow"><td class="transactionAmount possitive">100</td><td class="transactionMessage"><span>message</span></td></tr>


test('create new Transaction with amount 100 message "message"',()=>{
    expect(new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE, uuidv4()))
})


test('create new Transaction with amount 100 message "message" and check response of toHTML()',()=>{
    expect(new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE,'1234').toHTML())
    .toBe('<tr class="transactionRow"><td class="delete" idValue="1234"></td><td class="transactionAmount possitive">100</td><td class="transactionMessage"><span>message</span></td></tr>')
})


test('create new Transaction with amount -100 message "message" and check response of toHTML()',()=>{
    expect(new Transaction(100, 'message', ExpenseType.NEGATIVE_EXPENSE,"1234").toHTML())
    .toBe('<tr class="transactionRow"><td class="delete" idValue="1234"></td><td class="transactionAmount negative">100</td><td class="transactionMessage"><span>message</span></td></tr>')
})
