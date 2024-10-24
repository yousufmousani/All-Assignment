var user = prompt('Enter Hours \n 100 = 1 AM\n 200 = 2 AM')

if(user < 1200 &&  user >= 0){
    alert('Good Morning')
}else if(user < 1700 && user >=1200 ){
    alert('Good Afternoon')
}else if(user < 2100 && user >= 1700){
    alert('Good Evening')
}else if(user <= 2359 && user >=2100){
    alert('Good Night')
}