var a = document.getElementById('li-one')
var b = document.getElementById('all-features')
a.addEventListener('click', highlight)
a.addEventListener('mouseover', changebgcolor)
a.addEventListener('mouseout', nobgcolor)

function highlight(){
    
    a.style.color = 'red'
}
function changebgcolor(){
    a.style.backgroundColor = 'darkgrey'
    a.style.bordercolor = 'red'
    b.style.bordercolor = 'red'
}
function nobgcolor(){
    a.style.backgroundColor = ''
    a.style.color = ''
    
}
