var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var user = prompt('Welcome to abc bakery what do you want to order')

if(user == A[0]){
    alert(user+' is available at Index '+A.indexOf(A[0])+' in our Bakery')
}else if (user == A[1]){
    alert(user+' is available at Index '+A.indexOf(A[1])+' in our Bakery')
}else if (user == A[2]){
    alert(user+' is available at Index '+A.indexOf(A[2])+' in our Bakery')
}else if (user == A[3]){
    alert(user+' is available at Index '+A.indexOf(A[3])+' in our Bakery')
}else if (user == A[4]){
    alert(user+' is available at Index '+A.indexOf(A[4])+' in our Bakery')
}else(user+ 'is not available in our bakery')
