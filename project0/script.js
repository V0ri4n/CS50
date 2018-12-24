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

function newTodo(){
  let name=prompt("What do you have to do?")
  const todo = formatTodo(name)
  list.appendChild(todo)
  updateTotal(1)
  updateUnchecked(1)
}

function formatTodo(name){
  const checkbox = document.createElement("input")
  checkbox.className= classNames.TODO_CHECKBOX
  checkbox.type= "checkbox"
  checkbox.id=`check_${name}`
  checkbox.onchange= toggle

//  const button = document.createElement("input")
//  button.ClassName= classNames.TODO_BUTTON
//  button.type= "button"
//  button.style= "position: absolute right: 0px"
//  button.onClick= delete_todo(`${name}`)
//  button.value= "Delete"

  const span = document.createElement("span")
  span.className= classNames.TODO_TEXT
  span.innerHTML= name

  const span_button = document.createElement("span")
  span_button.className= classNames.TODO_BUTTON
  span_button.innerHTML= `<input type="button" style="vertical-align:middle; float:right; line-height: 28px"  value="delete" />`

  const li = document.createElement("li")
  span_button.addEventListener('click', function() {
    delete_todo(name)
  })
  li.className= classNames.TODO_ITEM
  li.id= "li_"+name
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(span_button)

  return li
}

function toggle() {
  if (this.checked) updateUnchecked(-1)
  else updateUnchecked(1)
}

function delete_todo(id){
  let del=document.getElementById(`li_${id}`)
  updateTotal(-1)
  if (!document.getElementById(`check_${id}`).checked) updateUnchecked(-1)
  del.parentNode.removeChild(del)
}
