const TransactionType = require('./expenseType')
class Transaction{
    constructor(amount , message , transactionType, id, createdDate , deleted){
        this.amount = amount;
        this.message = message;
        this.type = transactionType;
        this.id = id;
        if(createdDate==undefined){
        this.createDate  = new Date().getTime();
        }
        else{
            this.createDate = createdDate;
        }
        if(deleted==true){
            this.deleted = true;
        }
        else{
        this.deleted = false;
        }
    }
    toHTML(){
        let type = this.type==TransactionType.NEGATIVE_EXPENSE?"negative":"possitive";
        return `<tr class="transactionRow"><td class="delete" idValue="${this.id}"></td><td class="transactionAmount ${type}">${this.amount}</td><td class="transactionMessage"><span>${this.message}</span></td></tr>`    
    }
}
module.exports = Transaction;
