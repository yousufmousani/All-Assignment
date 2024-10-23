var number = 3
var user = prompt('Guess the Secret Number Between 1 to 10')

if(user == number){
    alert('“Bingo! Correct answer .”')
}else if(user == number-1){
    alert('“Close enough to the correct answer”.')
}
