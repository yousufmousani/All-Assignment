// Simple Quiz

var score = 0
var show = alert('Six Questions will be asked in this quiz')
var Q1 = +prompt('Q1: What is the color of our flag ?? \n\n 1: Green and white \n 2: only white\n 3: only Green\n 4: other color \n \n Enter the Number of Answer')
var Q2 = +prompt('Q2: What is the Capital of Pakistan ?? \n\n1: Karachi\n2: Lahore \n3: Islamabad \n4: Quetta \n \n Enter the Number of Answer')
var Q3 = +prompt('Q3: How many Provinces of pakistan ?? \n\n 1: One \n 2: Two \n 3: Four \n 4: Five\n \n Enter the Number of Answer')
var Q4 = +prompt('Q4: What do we use for Styling ?? \n\n1: Html \n2: Css \n3: Javascript \n4: python \n \n Enter the Number of Answer')
var Q5 = prompt('Q5: What do we use for functionality ?? \n\n1: Html \n2: Javascript \n3: Css \n4: python \n \n Enter the Number of Answer')
var Q6 = prompt('Q6: What do we use for structure of web content ?? \n\n1: Html \n2: Python \n3: Css \n4: Javascript \n \n Enter the Number of Answer')

if(Q1 == 1){
    score++
}else(score-1)

if(Q2 == 3){
    score++
}else(score-1)

if(Q3 == 4){
    score++
}else(score-1)
if(Q4 == 2){
    score++
}else(score-1)
if(Q5 == 2){
    score++
}else(score-1)
if(Q6 == 1){
    score++
}else(score-1)

if(score>5){
    alert('Your score is'+' '+ score+' '+'Excellent')
}else if(score>=3 && score<=5){
    alert('Your score is'+' '+ score+' '+'Good')
}else if(score >=1 && score<=2){
    alert('Your score is'+' '+ score+' '+'Fair')
}else(alert('Your score is'+' '+ score+' '+'Better Luck Next Time'))