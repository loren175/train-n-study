let history = []

const btnClear = document.querySelector("#clear")
const inputTag = document.querySelector('#input')

function addStudy() {
  /* Cria item no localStorage // localStorage item creation */

  if (localStorage.thisArr) {
    history = JSON.parse(localStorage.getItem("thisArr"))
  }

  let newStudy = document.getElementById("input").value
  history.push(newStudy)
  localStorage.thisArr = JSON.stringify(history)

  /* Mostrar itens adicionados ao input // Show item input */

  let studyHistory = document.getElementById("study")
  studyHistory.innerHTML = ""
  if (localStorage.thisArr) {
    history = JSON.parse(localStorage.getItem("thisArr"))
  }

  for (var i in history) {
    let p = document.createElement("p")
    p.innerHTML = history[i]
    studyHistory.append(p)
  }
  
  inputTag.value = ""
}

function clearList() {
  history = []
  localStorage.thisArr = JSON.stringify(history)

  window.location.reload(true)
}

function keyEnter(e) {
  if (e.key == "Enter") {
    addStudy()
  }
}

btnClear.addEventListener("click", clearList)
document.addEventListener("keydown", keyEnter)