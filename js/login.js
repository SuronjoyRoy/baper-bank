
document.getElementById('btn-submit').addEventListener('click', function(){
const emailFiled = document.getElementById('user-email');
const email = emailFiled.value;

const passField = document.getElementById('user-password');
const password = passField.value;
console.log(email, password);

// step:4 verify email and password and check whether valid or not

if(email ==='bank@gmail.com' && password==='secret'){
    window.location.href='bank.html';
}
else{
    alert('Please provide a right password')
}
})