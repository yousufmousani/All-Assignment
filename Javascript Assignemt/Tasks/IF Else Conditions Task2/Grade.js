// Grade Calculator

var Grade = prompt('Enter Your English Test Number')

if(Grade >= 90 && Grade<= 100){
    document.write('Your Grade is A ')

}else if(Grade<=89 && Grade >= 80){
    document.write('Your Grade is B ')
}else if(Grade<=79 && Grade >= 70){
    document.write('Your Grade is C ')
}else if(Grade<=69 && Grade >= 60){
    document.write('Your Grade is C ')
}else if(Grade<=59 && Grade>=1){
    document.write('Your Grade is F ')
}else
(alert('Enter Score Between 1 to 100'))