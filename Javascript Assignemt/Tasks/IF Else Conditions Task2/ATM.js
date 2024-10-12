// Simple ATM

var Balance = 4000

var user = prompt('Enter 1 for Check Balance \nEnter 2 for Withdraw \nEnter 3 for Deposit \nEnter 4 for Exit')

if(user == 1 ){
    document.write('Your Balance is'+' '+ Balance)
}else if (user ==2){
    var draw = +prompt('Enter WithDraw Value')
    var total = Balance-draw
    document.write('You withdraw' +' '+ draw +' '+ 'Rs'+'<br/> your Balance is'+' '+ total +' '+'Rs')
}else if(user ==3){
    var deposit = +prompt('Enter Deposit Value')
    var total = Balance+deposit
    document.write('You Deposit '+' '+ deposit +' '+'Rs' +'<br/> Your Balance is'+' '+total +' '+'Rs')
}