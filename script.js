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

function todoFeature() {
    let currentTask = []

    if (localStorage.getItem("currentTask")) {
        currentTask = JSON.parse(localStorage.getItem("currentTask"))
    } else {
        console.log("There is no Task List!")
    }

    function renderTask() {

        let allTask = document.querySelector('.todo-container .allTask')
        let sum = ''

        currentTask.forEach((e, idx) => {
            sum = sum + ` <div class="task">
                        <div class="task-data">
                            <h1>${e.heading} <span class=${e.imp}>imp</span></h1>
                            <h3>${e.detail}</h3>
                        </div>
                        <div class="btn" >
                            <button id=${idx}> Mark as Completed</button>
                        </div>
                    </div>`
        })
        allTask.innerHTML = sum

        localStorage.setItem("currentTask", JSON.stringify(currentTask))

        // Delete perticular data
        let marksCompletedBtn = document.querySelectorAll('.task .btn button')

        marksCompletedBtn.forEach(function (btn) {
            btn.addEventListener("click", () => {
                currentTask.splice(btn.id, 1)
                renderTask();
            })
        })

    }
    renderTask()

    let form = document.querySelector('.todo-form form')
    let headingInp = document.querySelector('form input')
    let detailInp = document.querySelector('form textarea')
    let checkbox = document.querySelector('form .imp-check #check')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        // console.log(currentTask)

        currentTask.push({
            heading: headingInp.value,
            detail: detailInp.value,
            imp: checkbox.checked
        })
        renderTask()

        headingInp.value = ""
        detailInp.value = ""
        checkbox.checked = ""
    })
}
todoFeature()

function dailyPlanner() {
    let dailyPlannerContainer = document.querySelector(".daily-planner-container")
    let insertedData = JSON.parse(localStorage.getItem("dailyPlannerData")) || {}

    var hoursOfDay = Array.from({ length: 18 }, (elem, idx) => {
        return `${6 + idx}:00-${7 + idx}:00`
    })

    let insertHours = ''

    hoursOfDay.forEach((hour, idx) => {
        let savedData = insertedData[idx] || '';

        insertHours = insertHours + `<div class="daily-planner-hour">
                    <p>${hour}</p>
                    <input id="${idx}" type="" placeholder=". . ." value= "${savedData}" >
                </div>`
    })

    dailyPlannerContainer.innerHTML = insertHours

    let dayInput = document.querySelectorAll('.daily-planner-hour input')

    dayInput.forEach((elem) => {
        elem.addEventListener("input", () => {
            insertedData[elem.id] = elem.value

            localStorage.setItem("dailyPlannerData", JSON.stringify(insertedData))
        })
    })
}
dailyPlanner()

