let allElems = document.querySelectorAll('.elem')
let allFullElems = document.querySelectorAll(".fullElem")

allElems.forEach(function(elem){
    elem.addEventListener('click',()=>{
        allFullElems[elem.id].style.display = "block"
    })
})