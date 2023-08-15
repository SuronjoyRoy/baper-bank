
// step:1 add even handler

document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log('withdraw');
// step:2
    const withdraField=document.getElementById('withdra-filed');
    const newWithdraAmoutString=withdraField.value;
    const newWithdraAmout=parseFloat(newWithdraAmoutString)
    // step:3

    const withDrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdraTotalStirng=withDrawTotalElement.innerText;
    const previousWithdraTotal=parseFloat(previousWithdraTotalStirng);
    // step:4

    
    const currentWithdraTotal=previousWithdraTotal + newWithdraAmout;
    withDrawTotalElement.innerText=currentWithdraTotal;
    // step:5
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previouBalanceTotal=parseFloat(previousBalanceTotalString);

         // step:7
        withdraField.value='';

    if(newWithdraAmout > previouBalanceTotal){
        alert('Tor baper banke eto tk nai');
        return;
    }

    // step:6
    const newBalanceTotal=previouBalanceTotal - newWithdraAmout;
    balanceTotalElement.innerText=newBalanceTotal;

   
    
})