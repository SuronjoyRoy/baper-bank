// Step:1 add event lisenr to deposite
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step:2 get the deposite from input field
// For input field use .value to get inside input filed info
    const depositField = document.getElementById('deposit-input');
    const newDepositAmoutString = depositField.value;
   const newDepositAmout=parseFloat(newDepositAmoutString);

    const depositTotalElement=document.getElementById('deposit-total');
    const previousdepositTotalString=depositTotalElement.innerText;
    const previousdepositTotal=parseFloat(previousdepositTotalString);

    // step:3 add numbert to set total deposit

    const currentDepositTotal=previousdepositTotal + newDepositAmout;
// set the deposit total 

    depositTotalElement.innerText = currentDepositTotal; 
    // step:4 get balance current total

    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousTotalBalance=parseFloat(previousBalanceTotalString);

    // setp:6 calculate curren all balance

    const currenBalanceTotal=previousTotalBalance + newDepositAmout;

    balanceTotalElement.innerText = currenBalanceTotal;
})