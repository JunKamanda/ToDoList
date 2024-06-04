// Après Correction de scratch
const form = document.querySelector("form");
const ListTodo = document.querySelector("ul.ListTodo");


// Local storage
function storeElement(){
    window.localStorage.todoList = ListTodo.innerHTML;
}

function getTodos(){
    if (window.localStorage.todoList == "") {  
        ListTodo.innerHTML = `<li>Appuyez pour supprimé</li>`
    } else {
        ListTodo.innerHTML = window.localStorage.todoList;
    }
}

document.addEventListener("load", getTodos())

// Add todo
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    ListTodo.innerHTML += `<li>${todo.value}</li>`;
    todo.value = "";
    storeElement();
})

// Remove todo
ListTodo.addEventListener("click", (e)=>{
    const li = e.target;
    // li.classList.add("checked");
    // setTimeout(() => {
    //     li.remove();
    // }, 500);
    if (li.classList.contains("checked")) {
        li.remove();
      } else {
        li.classList.add("checked");
      }
    storeElement();
})
