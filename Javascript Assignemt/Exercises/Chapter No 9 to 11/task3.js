var user = prompt('Enter Signal Color')

if(user == 'Red' || user == 'red'){
    document.write('<table><tr><th>Signal Color<th><th>Message<th><tr>'+'<tr><td>'+user+'<td><td>Must Stop<td><tr><table>')
}else if (user == 'Yellow' ||user == 'yellow'){
    document.write('<table><tr><th>Signal Color<th><th>Message<th><tr>'+'<tr><td>'+user+'<td><td>Ready to Move<td><tr><table>')
}else if (user == 'Green' ||user == 'green'){
    document.write('<table><tr><th>Signal Color<th><th>Message<th><tr>'+'<tr><td>'+user+'<td><td>Move Now<td><tr><table>')
}else(alert('Enter Green Red Or Yellow color only'))
