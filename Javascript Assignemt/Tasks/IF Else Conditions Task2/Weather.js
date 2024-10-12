// Weather Advisory 

var Temp = prompt('Enter Tempreture')

if(Temp > 100){
    document.write('Extreme Heat Advisory')
}else if(Temp >=80 && Temp <=99){
    document.write('Warm Weather Advisory')
}else if(Temp >=60 && Temp<=79){
    document.write('Pleasant Weather')
}else if(Temp >=32 && Temp<=59){
    document.write('Cool Weather')
}else if(Temp < 32 && Temp>=1){
    document.write('Freezing Temperature Advisory')
}