document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    addTask(event.target.addTask.value);
    form.reset();
  })
});

function addTask(event) {
  let li = document.createElement('li')
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'X'
  deleteButton.style.backgroundColor = 'orange'
  deleteButton.style.color = 'white'
  deleteButton.addEventListener('click', handleDelete)
  li.textContent = `${event} `
  const parent = document.getElementById('tasks')
  parent.appendChild(li)
  li.appendChild(deleteButton)
}

function handleDelete(event) {
  event.target.parentNode.remove()
}