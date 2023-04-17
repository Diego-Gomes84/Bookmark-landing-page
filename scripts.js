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

let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }

    var email = document.getElementById ('')
