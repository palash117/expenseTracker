console.log("hello expense manager")
//requires
const ExpenseManager = require('./modules/expenseManager')
//DOM elements 
var elAccountInfo;
var elTxnType;
var elTxnDescription;
var elTxnAmount;
var elTxnSubmit;

var elNotification;
var elNotificationTitle;
var elNotificationMessage;
var elNotificationClose;

//variables
var expenseManager;
//const
const EXPENSE_MANAGER_KEY = "EXPENSE_MANAGER_KEY"
const DEFAULT_NOTIFY_TIMEOUT = 10000;

//init
var init=()=>{
    initDomRefference();
    setupEventListeners();
    initExpenseManager();
    updateDisplay();
    updateEventListeners()
    // callNotify('loaded','please sart', 10000);
}
//initDomRefference
var initDomRefference = ()=>{
    elAccountInfo = document.querySelector('.accountInfoContainer');
    elTxnType = document.querySelector('#transactionTypeInput')
    elTxnDescription = document.querySelector('#transactionDescriptionInput')
    elTxnAmount = document.querySelector('#transactionAmountInput')
    elTxnSubmit = document.querySelector('#transactionSubmit')
    elNotification = document.querySelector('.notification')
    elNotificationTitle = document.querySelector('.notificationTitle')
    elNotificationMessage = document.querySelector('.notificationMesasge')
    elNotificationClose = document.querySelector('.closeNotification')
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
    if(transactionAmount<0){
        callNotify('Uh oh!','Expense/Income amount can not be -ve', DEFAULT_NOTIFY_TIMEOUT)
        return;
    }
    if(transactionType!=1){
        transactionAmount *=-1;
    }
    // transactionType
    try {
        expenseManager.addTransaction(transactionAmount, transactionDescription)
      }
      catch(err) {
        callNotify('Uh oh!',err, DEFAULT_NOTIFY_TIMEOUT)
      }
    setTimeout(updateLocalStorage, 1);
    updateDisplay();
    updateEventListeners()
    cleanTransactionCreatorInputs();
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

var cleanTransactionCreatorInputs=()=>{
    elTxnDescription.value='';
    elTxnAmount.value=0;
}

// notification
var notify = (title, message, timeout=5000)=>{
    elNotification.classList.remove('hide')
    elNotificationTitle.innerHTML= title;
    elNotificationMessage.innerHTML = message;
    var key  = setTimeout(()=>{
        elNotification.classList.add('hide');
    }, timeout)
    return function closeNotify(){
        elNotification.classList.add('hide');
        clearTimeout(key);
    }
}
var callNotify = (title, message, timeout)=>{
    closeNotify = notify(title, message, timeout);
    elNotificationClose.addEventListener('click',closeNotify);
}



// init call
window.onload= init