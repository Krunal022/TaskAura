function openFeature() {
    let allElems = document.querySelectorAll('.elem')
    let fullElemPage = document.querySelectorAll(".fullElem")
    let fullElemPagebackbtn = document.querySelectorAll('.back')

    // Opening the fullPage
    allElems.forEach(function (elem) {
        elem.addEventListener('click', () => {
            fullElemPage[elem.id].style.display = "block"
        })
    })

    // Closing the fullPage
    fullElemPagebackbtn.forEach(function (back) {
        back.addEventListener('click', () => {
            fullElemPage[back.id].style.display = "none"
        })
    })
}
openFeature()