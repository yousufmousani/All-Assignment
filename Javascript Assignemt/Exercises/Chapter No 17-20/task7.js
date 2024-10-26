var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var user = prompt('Welcome to abc bakery what do you want to order')
var match = false

for(var i = 0;i<A.length;i++){
    if(user == A[i]){
        match = true
       alert(user+' is available at index '+i+' in our bakery')
    }
}
if(match == false){
    alert('we are sorry. '+user + ' not available in our bakery')
}



