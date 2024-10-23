var user = prompt('Enter Temperature')

if(user >= 40){
    alert('“It is too hot outside.”')
}else if(user >=30 && user <=39){
    alert('“The Weather today is Normal.”')
}else if(user >=20 && user <=29 ){
    alert('“Today’s Weather is cool.”')
}else if(user >= 10 && user <=19){
    alert('“OMG! Today’s weather is so Cool.”')
}