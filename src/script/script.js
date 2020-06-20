console.log("hello expense manager")
//requires
const ExpenseManager = require('./modules/expenseManager')
//DOM elements 
var elAccountInfo;
var elTxnType;
var elTxnDescription;
var elTxnAmount;
var elTxnSubmit;

//variables
var expenseManager;
//const
const EXPENSE_MANAGER_KEY = "EXPENSE_MANAGER_KEY"

//init
var init=()=>{
    initDomRefference();
    setupEventListeners();
    initExpenseManager();
    updateDisplay();
    updateEventListeners()
}
//initDomRefference
var initDomRefference = ()=>{
    elAccountInfo = document.querySelector('.accountInfoContainer');
    elTxnType = document.querySelector('#transactionTypeInput')
    elTxnDescription = document.querySelector('#transactionDescriptionInput')
    elTxnAmount = document.querySelector('#transactionAmountInput')
    elTxnSubmit = document.querySelector('#transactionSubmit')
}
//setupEventListeners
var setupEventListeners = ()=>{
    elTxnSubmit.addEventListener('click',addTransaction) 
   
}
var updateEventListeners = ()=>{
    document.querySelectorAll('.delete').forEach(el=> el.addEventListener('click',deleteTransaction)) 
}
//init expenseManager
var initExpenseManager=()=>{
    let storageData = localStorage.getItem(EXPENSE_MANAGER_KEY);
    
    expenseManager = new ExpenseManager();
    expenseManager.deSerialize(storageData);
}

//event listenrers
var addTransaction = ()=>{
    let transactionType = elTxnType.value;
    let transactionAmount = elTxnAmount.value;
    let transactionDescription = elTxnDescription.value;
    if(transactionType!=1){
        transactionAmount *=-1;
    }
    // transactionType
    expenseManager.addTransaction(transactionAmount, transactionDescription)
    setTimeout(updateLocalStorage, 1);
    updateDisplay();
    updateEventListeners()
}

var deleteTransaction=(event)=>{
    let transactionId = event.target.getAttribute('idValue');
    expenseManager.deleteTransaction(transactionId)
    
    updateDisplay();
    updateEventListeners();
    updateLocalStorage();
}




var updateLocalStorage=()=>{
    localStorage.setItem(EXPENSE_MANAGER_KEY, expenseManager.serialize())
}

//dom display/paint
var updateDisplay=()=>{
    elAccountInfo.innerHTML= expenseManager.completeAccountHTML();
}
window.onload= init