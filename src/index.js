document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
  })
});

function buildToDo(toDo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  li.textContent = `${toDo}    `
  li.appendChild(btn)
  list.appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

//function buildToDo(descriptionField) {
//  let li = document.createElement('li')
//  li.textContent = `${descriptionField}`
//  li.appendChild(todoTasks) 
//}