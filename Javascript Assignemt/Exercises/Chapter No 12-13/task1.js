var user = prompt('Enter Value')

if(user >= 'a' && user<= 'z'){
    alert(user+' is Lowercase alphabet')
}else if(user >= 'A' && user<= 'Z'){
    alert(user+' is Uppercase alphabet')
}else if(user >= '0' ){
    alert(user+' is Number')
}