
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
//initially divToDoList should be hidden
divTodoList.hidden = true;

//get the h2- todo list
const h2Todo = document.getElementsByClassName('divTodoHeader')
h2Todo[0].childNodes[1].hidden = true;

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

    //this will create node of type text
    let valTodo = document.createTextNode(item);
    //append text child to li
    liTodo.appendChild(valTodo);

    //create textbox to edit the selected radio button
    let txtItem = document.createElement('input');
    txtItem.type = 'text';
    txtItem.value = item; //setting the user entered value to textbox value
    //hide the textbox while adding todo items
    //we need this only for Edit
    txtItem.hidden = true;
    //txtItem.disabled = true;
    liTodo.appendChild(txtItem);


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
    //get the child element count and and add the border to the div when count is 1
    if (ulTodoList.childElementCount == 1) {
        divTodoList.style.border = 'solid 1px black';
        divTodoList.style.width = '50%';
        divTodoList.hidden = false;
        h2Todo[0].childNodes[1].hidden = false;
    }

    //clear inputAdd, after user clicks on btnAdd
    inputAdd.value = '';
    inputAdd.focus();
}

//get the Add button
const btnAdd = document.getElementById('btnAdd');

btnAdd.onclick = () => {
    AddItems(inputAdd.value);
};


