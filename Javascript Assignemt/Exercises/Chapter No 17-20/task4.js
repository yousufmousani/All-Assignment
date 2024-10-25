var table = prompt('Enter Table No')
var length = prompt('Enter Table Length')

document.write('<h2>Multiplication table of '+ table+'</h2>')
document.write('<h2>Length '+ length+'</h2>')
for(var i = 1;i<=length;i++){
    document.write(table+' x '+i+' = '+table*i+'<br>')
}