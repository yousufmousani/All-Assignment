// Task 1

// var fisrtName = prompt('Enter First Name')
// var LastName = prompt('Enter Last Name')
// var fullName = fisrtName+' '+LastName
// alert('Welcome '+fullName)

// Task 2

// var user = prompt('Enter Your favourite Mobile')
// document.write('Your favourite Mobile is : '+user +'<br>'+'Length of string : '+ user.length)

// Task 3

// var Name = 'pakistani'
// document.write('String :'+Name+'<br>'+'Index of n is : '+Name.indexOf('n'))

// Task 4 
// var Name = 'Hello World'
// document.write('String :'+Name+'<br>'+'Last Index of l is : '+Name.lastIndexOf('l'))

// Task5
// var Name = 'Pakistani'
// document.write('String : '+Name+'<br>'+'Character of index 3 : '+Name.charAt(3))

// Task6
// var fisrtName = prompt('Enter First Name')
// var LastName = prompt('Enter Last Name')
// var fullName = fisrtName.concat(LastName)
// alert('Welcome '+fullName)

// Task7

// var Name = 'Hyderabad'
// var replace = Name.replace('Hyder','Islam')
// document.write('City : '+Name+'<br>'+'After replacement : '+replace)

// Task8
// var message = `Ali and Sami are best friends. They play cricket and football together.`
// var replaceall = message.replaceAll('and','&')
// document.write(replaceall)

// Task9

// var string = '472'
// var change = Number(string)
// document.write('Value '+string+'<br>'+'Type : '+typeof(string)+'<br>'+'Value '+string+'<br>'+'Type : '+typeof(change))

// Task 10

// var user = prompt('Enter Text')
// var change = user.toUpperCase()
// document.write(`user input : ${user} <br> upper case : ${change}`)


// Task 11

// var user = prompt('Enter text')
// var change = user.slice(0,1).toUpperCase()+user.slice(1).toLowerCase()
// document.write(`user input : ${user} <br> Title case : ${change}`)

// Task 12

// var num = 35.36
// var convert = num.toString()
// var copy = convert.slice(0,2)+convert.slice(3)
// console.log(num)
// console.log(copy)

// Task 13

// var user = prompt('Enter Your Name')
// var flag = false

// for(var i = 0;i<user.length;i++){
//     if(user[i]>='!' && user[i] <='+'){
//         flag = true
//         break

// }

// }
// if(flag){
//     alert('Enter Valid Name Without any Symbol')
// }


// Task 14

// var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var user = prompt('Search Item').slice(0).toLowerCase()
// var flag = false

// for(var i = 0;i<items.length;i++){
//     if(user == items[i]){
//         flag = true
//         break

//         alert(user +' is available at index '+ i+ ' in our Bakery')
//     }

// }
// if(flag){
//     alert(user +' is available at index '+ i+ ' in our Bakery')
// }else(alert('We are sorry '+ user + 'is not available in our Bakery'))

// Task 15

// var user = prompt('Enter Your password')
// var flag = 0

// for(var i = 0;i<user.length;i++){
//     if(user[0] >= 1 ||  user[0]<=0){
//         flag = 1
//     }else if(user.length < '6'){
//         flag = 2

//     }else if(user[i]>= 'a' || user[i]<='y'){
//         if(user[i]>= 0 || user[i]<= 10){

//         }else(flag = 3)

//         }
        

// }
// if(flag == 1){
//     alert('Password should not start with a number')
// }if(flag == 2){
//     alert('Password must at least 6 characters long')
// }if(flag == 3){
//     alert('Password should contain alphabets and numbers')
// }



// Task 16

// var university = 'University of Karachi';
// var split = university.split('')
// for(var i = 0;i<university.length;i++){
//     document.write(split[i]+'<br>')

// }

// Task 17

// var user = prompt('Enter text')
// var length = user.length
// var characters = user.charAt(length-1)
// document.write('User Input : '+user+'<br>')
// document.write('Last characters of input : '+characters+'<br>')

// Task 18



