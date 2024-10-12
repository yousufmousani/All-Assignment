// Age Group Classifier

var age = prompt('Enter Age')

if(age >=1 && age <=12){
    document.write('You are Child')
}
else if (age>=13 && age <= 19){
    document.write('You are Teenager')
}else if (age>=20 && age<=64){
    document.write('You are Adult')
}else if(age>=65 && age<=100){
    document.write('You are Senior Citizen')
}else(alert('Enter age between 1 to 100'))