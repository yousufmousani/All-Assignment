var password = 1234;
var user = prompt('Enter Password')

if(user == ''){
    alert('Enter Password')
}else if (user == password){
    alert('“Correct! The password you entered matches the original password”.')
}else(alert('“Incorrect password”'))