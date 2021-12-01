// import './styles.css';

//include css dynamically
// var cssId = 'todo';
// if (!document.getElementById(cssId)) {
//     var head = document.getElementsByTagName('head')[0];
//     var link = document.createElement('link');
//     link.id = cssId;
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = './todo.css';
//     link.media = 'all';
//     head.appendChild(link);
// }

//get div with id divTodoList
const divTodoList = document.getElementById('divTodoList');
console.log(divTodoList);
divTodoList.style.border = 'solid 1px black';
divTodoList.style.width = '50%';

//get ul 
const ulTodoList = document.getElementById('ulTodoList');
//remove bullets from ul
ulTodoList.style.listStyle = 'none';
ulTodoList.style.paddingInlineStart = '0px';

//create temporary array of todoList
let arrTodoList = ["Buy Groceries", "Go for a Walk", "Buy Flowers"];

//get the textAdd
const inputAdd = document.getElementById('inputAdd');
// inputAdd.innerText = inputAdd.value;

function AddItems(item) {
    //create list element
    let liTodo = document.createElement('li');
    liTodo.style.margin = '10px 0px';

    //create radiobutton
    let radioTodo = document.createElement('input');
    radioTodo.type = 'radio';
    radioTodo.name = 'radioTodo';
    // radioTodo.value = todoElement;
    radioTodo.value = item;
    radioTodo.checked = false;
    radioTodo.width = '200px';
    radioTodo.height = '200px';
    radioTodo.style.border = "solid 1px black";
    //add radiobutton to li
    liTodo.appendChild(radioTodo);


    //get the text from array
    // let valTodo = document.createTextNode(todoElement);
    let valTodo = document.createTextNode(item);
    //append text child to li
    liTodo.appendChild(valTodo);

    //create complete button and append to li
    let btnComplete = document.createElement('input');
    btnComplete.type = 'image';
    btnComplete.src = '/Images/complete.png';
    //btnComplete.classList.add('buttonComplete')
    //btnComplete.class = 'buttonComplete';
    btnComplete.style.width = '20px';
    btnComplete.style.height = '20px';
    btnComplete.style.marginLeft = '20px';
    btnComplete.style.textAlign = 'right';
    btnComplete.disabled = true;
    liTodo.appendChild(btnComplete);

    //create edit button and append to li
    let btnEdit = document.createElement('input');
    btnEdit.type = 'image';
    btnEdit.src = '/Images/edit.png';
    //btnEdit.class = 'buttonEdit';
    btnEdit.style.width = '30px';
    btnEdit.style.height = '20px';
    btnEdit.style.marginLeft = '20px';
    btnEdit.style.textAlign = 'right';
    btnEdit.disabled = true;
    liTodo.appendChild(btnEdit);

    //create delete button and append to li
    let btnDelete = document.createElement('input');
    btnDelete.type = 'image';
    btnDelete.src = '/Images/delete.png';
    //btnDelete.class = 'buttonDelete';
    btnDelete.style.width = '20px';
    btnDelete.style.height = '20px';
    btnDelete.style.marginLeft = '20px';
    btnDelete.style.textAlign = 'right';
    btnDelete.disabled = true;
    liTodo.appendChild(btnDelete);

    //append li to ul
    ulTodoList.appendChild(liTodo);
}

//get the Add button
const btnAdd = document.getElementById('btnAdd');

btnAdd.onclick = () => {
    AddItems(inputAdd.value)
};


// AddItems("My first Todo");
// AddItems(inputAdd.value);

// //loop through arrTodoList to get items and create elements
// arrTodoList.forEach(todoElement => {

//     //create list element
//     let liTodo = document.createElement('li');
//     liTodo.style.margin = '10px 0px';

//     //create radiobutton
//     let radioTodo = document.createElement('input');
//     radioTodo.type = 'radio';
//     radioTodo.name = 'radioTodo';
//     radioTodo.value = todoElement;
//     radioTodo.checked = false;
//     radioTodo.width = '200px';
//     radioTodo.height = '200px';
//     radioTodo.style.border = "solid 1px black";
//     //add radiobutton to li
//     liTodo.appendChild(radioTodo);


//     //get the text from array
//     let valTodo = document.createTextNode(todoElement);
//     //append text child to li
//     liTodo.appendChild(valTodo);

//     //create complete button and append to li
//     let btnComplete = document.createElement('input');
//     btnComplete.type = 'image';
//     btnComplete.src = '/Images/complete.png';
//     //btnComplete.classList.add('buttonComplete')
//     //btnComplete.class = 'buttonComplete';
//     btnComplete.style.width = '20px';
//     btnComplete.style.height = '20px';
//     btnComplete.style.marginLeft = '20px';
//     btnComplete.style.textAlign = 'right';
//     btnComplete.disabled = true;
//     liTodo.appendChild(btnComplete);

//     //create edit button and append to li
//     let btnEdit = document.createElement('input');
//     btnEdit.type = 'image';
//     btnEdit.src = '/Images/edit.png';
//     //btnEdit.class = 'buttonEdit';
//     btnEdit.style.width = '30px';
//     btnEdit.style.height = '20px';
//     btnEdit.style.marginLeft = '20px';
//     btnEdit.style.textAlign = 'right';
//     btnEdit.disabled = true;
//     liTodo.appendChild(btnEdit);

//     //create delete button and append to li
//     let btnDelete = document.createElement('input');
//     btnDelete.type = 'image';
//     btnDelete.src = '/Images/delete.png';
//     //btnDelete.class = 'buttonDelete';
//     btnDelete.style.width = '20px';
//     btnDelete.style.height = '20px';
//     btnDelete.style.marginLeft = '20px';
//     btnDelete.style.textAlign = 'right';
//     btnDelete.disabled = true;
//     liTodo.appendChild(btnDelete);

//     //append li to ul
//     ulTodoList.appendChild(liTodo);

// })

// const selectedRadio = document.getElementsByName('radioTodo');
// console.log(selectedRadio[0]);
// // radioTodo.onchange = function (e) {
// //     console.log(e.target);
// // }
// console.log(selectedRadio[1].checked)

