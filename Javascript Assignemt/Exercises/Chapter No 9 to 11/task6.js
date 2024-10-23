var sub1 = +prompt('Enter Obtain Marks in English')
var sub2 = +prompt('Enter Obtain Marks in Math')
var sub3 = +prompt('Enter Obtain Marks in Urdu')
var total = sub1+sub2+sub3
var percentage = total/300*100


document.write('<h1>Mark Sheet<h1><br>')
document.write('Total Marks : 300 <br>')
document.write('Mark Obtained : '+total+'<br>')


if(percentage >= 80 &&  percentage <=100){
    document.write('Percentage : '+percentage+'<br>')
    document.write('Grade : A-One <br>')
    document.write('Remarks : Excellent')
}else if(percentage >= 70 &&  percentage<=79){
    document.write('Percentage : '+percentage+'<br>')
    document.write('Grade : A <br>')
    document.write('Remarks : Good')
}else if(percentage >= 60 &&  percentage<=69){
    document.write('Percentage : '+percentage+'<br>')
    document.write('Grade : B <br>')
    document.write('Remarks : You Need to Improve')
}else if(percentage >= 1 &&  percentage<=59){
    document.write('Percentage : '+percentage+'<br>')
    document.write('Grade : Fail <br>')
    document.write('Remarks : Sorry')
}


