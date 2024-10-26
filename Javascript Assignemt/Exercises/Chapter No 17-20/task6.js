var array1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']


document.write('<b>Counting</b><br>')


for(var i = 1;i<= 15;i++){
    document.write([i]+',')
}

document.write('<br><br><b>Reverse Counting</b><br>')
for(var i = 10;i>=1;i--){
    document.write([i]+',')
}


var array2 = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
var odd = []
var even = []
var series = []


document.write('<br><br><b>Even Number</b><br>')


for(var i = 0;i<=20;i++){
    if(array2[i]%2==0){
        even.push(array2[i])
        
    }
}

document.write(even)

document.write('<br><br><b>Odd Number</b><br>')


for(var i = 0;i<=20;i++){
    if(array2[i]%2!=0){
        odd.push(array2[i])
        
    }
}

document.write(odd)

document.write('<br><br><b>Series</b><br>')


for(var i = 1;i<=20;i++){
    if(array2[i]%2==0){
        series.push(array2[i]+'k')
        
    }
}   

document.write(series)