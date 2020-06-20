const ExpenseManager = require('./expenseManager')
const ExpenseType = require('./expenseType')
const Transaction = require('./transaction')
test('base test',()=>{
    expect(new ExpenseManager('test'))
})

test('addTransaction',()=>{
    expect(()=>{new ExpenseManager('test').addTransaction()}).toThrow()
})

test('add transaction with 100 amount and message"test"', ()=>{
    expect(new ExpenseManager('test').addTransaction(100, 'test', ExpenseType.POSITIVE_EXPENSE))
})

test('add transaction and get all transactions', ()=>{
    let expenseManager = new ExpenseManager('test');
    expenseManager.addTransaction(100, 'message');
    expenseManager.addTransaction(-20, 'message2')
    let transactionList= [new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE), new Transaction(20,'message2',ExpenseType.NEGATIVE_EXPENSE)];
    expect(expenseManager.getTransactions().length).toStrictEqual(
        2
    )
})

test('add transaction with 0 amount , expect error', ()=>{
    expect(()=>{new ExpenseManager('test').addTransaction(0, 'message')}).toThrow()
})

test('add transactions and check toHTML response',()=>{
    let expenseManager = new ExpenseManager('test');
    expenseManager.addTransaction(100, 'message');
    expenseManager.addTransaction(-20, 'message2')
    let transactionList= [new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE), new Transaction(20,'message2',ExpenseType.NEGATIVE_EXPENSE)];
    expect(expenseManager.toHTML()).toBe(
        "<table class=\"transactionTable\"><tr class=\"transactionRow\"><td class=\"delete\" idValue=\"1234\"></td><td class=\"transactionAmount possitive\">100</td><td class=\"transactionMessage\"><span>message</span></td></tr><tr class=\"transactionRow\"><td class=\"delete\" idValue=\"1234\"></td><td class=\"transactionAmount negative\">20</td><td class=\"transactionMessage\"><span>message2</span></td></tr></table>"
        )
})

test('add transactions and check getBallance',()=>{
    let expenseManager = new ExpenseManager('test');
    expenseManager.addTransaction(100, 'message');
    expenseManager.addTransaction(-20, 'message2')
    let transactionList= [new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE), new Transaction(20,'message2',ExpenseType.NEGATIVE_EXPENSE)];
    expect(expenseManager.getBallance()).toBe(80)
})

test('add transactions and check getPositiveBallance',()=>{
    let expenseManager = new ExpenseManager('test');
    expenseManager.addTransaction(100, 'message');
    expenseManager.addTransaction(-20, 'message2')
    let transactionList= [new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE), new Transaction(20,'message2',ExpenseType.NEGATIVE_EXPENSE)];
    expect(expenseManager.getPossitiveBallance()).toBe(100)
})

test('check getPositiveBallance without any transactions',()=>{
    let expenseManager = new ExpenseManager('test');
    expect(expenseManager.getPossitiveBallance()).toBe(0)
})


test('add transactions and check getNegativeBallance',()=>{
    let expenseManager = new ExpenseManager('test');
    expenseManager.addTransaction(100, 'message');
    expenseManager.addTransaction(-20, 'message2')
    expect(expenseManager.getNegativeBallance()).toBe(20)
})
test('check getNegativeBallance without transactions',()=>{
    let expenseManager = new ExpenseManager('test');
    // let transactionList= [new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE), new Transaction(20,'message2',ExpenseType.NEGATIVE_EXPENSE)];
    expect(expenseManager.getNegativeBallance()).toBe(0)
})

test('add transactions and check completeHTML response',()=>{
    let expenseManager = new ExpenseManager('test');
    expenseManager.addTransaction(100, 'message');
    expenseManager.addTransaction(-20, 'message2')
    // let transactionList= [new Transaction(100, 'message', ExpenseType.POSITIVE_EXPENSE), new Transaction(20,'message2',ExpenseType.NEGATIVE_EXPENSE)];
    let response = `<div class="ballanceContainer">
    <div class="ballanceMessage">
        your current ballance
    </div>
    <div class="ballance">
        <span class="money"><h3>80</h3></span>
    </div>
    <div class="incomeVsExpenseContainer">
        <div class="ieContainer">
            <span class="money possitive">100</span>
        </div>
        <div class="ieContainer">
            <span class="money negative">20</span>
        </div>
    </div>
</div>
<div class="transactionContainer">
    <div class="transactionMainMessage">
        <h5>your transactions</h5>
    </div>
    <div class="transactionList">
        <table class="transactionTable">
            <tr class="transactionRow">
            <td class="delete"idValue="1234"></td>
                <td class="transactionAmount possitive">100</td>
                <td class="transactionMessage"><span>message</span></td>
            </tr>
            <tr class="transactionRow">
            <td class="delete"idValue="1234"></td>
                <td class="transactionAmount negative">20</td>
                <td class="transactionMessage"><span>message2</span></td>
            </tr>
        </table>
    </div>
</div>`
    response= response.split(' ').join('')
    let expectedResponse= response.split('\n').join('')
    let actualResponse = expenseManager.completeAccountHTML()
    actualResponse= actualResponse.split('\n').join('')
    actualResponse = actualResponse.split(' ').join('')
    expect(actualResponse).toBe(expectedResponse)
})
test('add transactions and check toHTML response',()=>{
    let expenseManager = new ExpenseManager('test');
    expect(expenseManager.toHTML()).toBe( "<table class=\"transactionTable\"></table>")
})

// test('check serialize',()=>{
//     let expenseManager = new ExpenseManager('test');
//     expenseManager.addTransaction(100, 'message');
//     expenseManager.addTransaction(-20, 'message2')
//     expect(expenseManager.serialize()).toBe( "[{\"amount\":100,\"message\":\"message\",\"type\":1,\"createDate\":1592654345977},{\"amount\":20,\"message\":\"message2\",\"type\":2,\"createDate\":1592654345977}]")
// })
test('check deserialize',()=>{
    let serialData = "[{\"amount\":100,\"message\":\"message\",\"type\":1,\"createDate\":1592653963422},{\"amount\":20,\"message\":\"message2\",\"type\":2,\"createDate\":1592653963422}]"
    let expenseManager = new ExpenseManager('test');
    expenseManager.deSerialize(serialData)
    expect(expenseManager.transactionList.length).toBe(2)})
//    let expenseManager = new ExpenseManager('test');
//"[{\"amount\":100,\"message\":\"message\",\"type\":1,\"createDate\":1592653963422},{\"amount\":20,\"message\":\"message2\",\"type\":2,\"createDate\":1592653963422}]"

test('check deserialize with empty serial data',()=>{
    let serialData = ""
    let expenseManager = new ExpenseManager('test');
    expenseManager.deSerialize(serialData)
    expect(expenseManager.toHTML()).toBe('<table class=\"transactionTable\"></table>')}
)