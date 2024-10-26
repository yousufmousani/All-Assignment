var number = [24, 53, 78, 91, 12,]
var largest = number[0]
for(var i = 0;i<number.length;i++){
    if(number[i]<largest){
        largest = number[i]
    }
}
document.write('Array Items '+ number)
document.write('<br>The Smallest Number is '+largest)