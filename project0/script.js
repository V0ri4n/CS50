const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_BUTTON: "button",
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


// button must create new TODOs
// Must track total number of TODOs
// Must track total number of unchecked TODOs
// Must be able to delete TODOs

TOMORROW = Let's forget this and try to make a class for TODOs









let totalCount= 0
let uncheckedCount= 0
let id=""

function updateTotal(updateValue){
  totalCount=totalCount + updateValue
  itemCountSpan.innerHTML= totalCount
}

function updateUnchecked(updateValue){
  uncheckedCount= uncheckedCount + updateValue
  uncheckedCountSpan.innerHTML= uncheckedCount
}

function formatTodo(name){
  const checkbox = document.createElement("input")
  checkbox.className= classNames.TODO_CHECKBOX
  checkbox.type= "checkbox"
  checkbox.onchange= toggle

  const button = document.createElement("button")
  button.ClassName= classNames.TODO_BUTTON
  button.type= "button"
  button.onclick= delete_todo(`${name}`)
  button.value= "Delete"

  const span = document.createElement("span")
  span.className= classNames.TODO_TEXT
  span.setAttribute("contenteditable","true")
  span.innerHTML= name

  const li = document.createElement("li")
  li.className= classNames.TODO_ITEM
  li.id= "li_"+name
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(button)

  return li
}

function delete_todo(id){
  let del=document.getElementById(`li_${id}`)
  console.log(del)
}

function newTodo(){
  let name=prompt("name?")
  const todo = formatTodo(name)
  list.appendChild(todo)
  updateTotal(1)
  updateUnchecked(1)
}

function toggle() {
  if (this.checked) updateUnchecked(-1)
  else updateUnchecked(1)
}
