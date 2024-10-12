// Age Check

var Age = prompt('Enter Your Age')

if(Age >18){
    alert('Your are Adult')

}else if(Age>=13 && Age <= 18){
    alert('Your are a Teenager')
}
else{
    alert('You are a Child')
}

// Weather Advise

var weather = prompt('Enter Weather  \n 1: Sunny \n 2: Rainy \n 1: Snowy')

if(weather == 'sunny'){
    alert('Wear Sunglasses!')
}else if(weather == 'rainy'){
    alert('Take an umbrella')
}else if(weather == 'snowy'){
    alert('Wear warn clothes')
}
else{
    alert('Enjoy Your Day!')
}

// Grade Determination

var Grade = prompt('Enter Your Marks')

if(Grade >= 90){
    alert('Grade A')
}else if(Grade >=80 && Grade <=89){
    alert('Grade B')
}else if(Grade >=70 && Grade<= 79){
    alert('Grade C')
}else if (Grade >=69 && Grade <=69){
    alert('Grade D')
}else{
    alert('Grade F')
}

// Simple login System

var login = prompt('Enter User Name "Admin"')
var Password = prompt('Enter Your Password "1234"')

if(login == 'admin' && Password == '1234'){
    alert('Login Successful')
}else{
    alert('Login Failed Try Again')
}

// Number Range Checker

var number = prompt('Enter Number')

if(number >=1 && number <=10){
    alert('The Number is between 1 and 10')
}else if(number >=11 && number <=20){
    alert('The Number is between 11 and 20')
}else{
    alert('The Number is out of Range')
}