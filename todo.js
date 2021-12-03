//make an array to store data on browser's local storage
let arrTodoList = [];

//get div with id divTodoList
const divTodoList = document.getElementById('divTodoList');
//initially divToDoList should be hidden
divTodoList.hidden = true;

//get the h2- todo list
const h2Todo = document.getElementsByClassName('divTodoHeader')
h2Todo[0].childNodes[1].hidden = true;

//get the textAdd
const inputAdd = document.getElementById('inputAdd');

//get the label for error messages
const lblErrorMessage = document.getElementById('lblErrorMessage');

//add todo items
function AddItems(item) {

    //create div for each item
    let itemDivTodo = document.createElement('div');
    itemDivTodo.style.margin = '10px 0px';

    //create radiobutton
    let radioTodo = document.createElement('input');
    radioTodo.type = 'radio';
    radioTodo.name = 'radioTodo';
    radioTodo.value = item;
    radioTodo.checked = false;
    radioTodo.width = '200px';
    radioTodo.height = '200px';
    radioTodo.style.border = "solid 1px black";
    //add radiobutton to Item div
    itemDivTodo.appendChild(radioTodo);

    //create textbox to show item 
    let txtItem = document.createElement('input');
    txtItem.type = 'text';
    txtItem.value = item; //setting the user entered value to textbox value    
    txtItem.disabled = true;
    //set the background color and border to look textbox as label
    //Note: when editing the items, need to change the style of textbox to lookalike textbox
    txtItem.style.background = 'rgba(0,0,0,0)';
    txtItem.style.border = '1px solid rgba(0,0,0,0)';
    itemDivTodo.appendChild(txtItem);


    //create complete button and append to li
    let btnComplete = document.createElement('input');
    btnComplete.type = 'image';
    btnComplete.src = '/Images/complete.png';
    btnComplete.style.width = '20px';
    btnComplete.style.height = '20px';
    btnComplete.style.marginLeft = '20px';
    btnComplete.style.textAlign = 'right';
    btnComplete.disabled = true;
    itemDivTodo.appendChild(btnComplete);

    //create edit button and append to li
    let btnEdit = document.createElement('input');
    btnEdit.type = 'image';
    btnEdit.src = '/Images/edit.png';
    btnEdit.style.width = '30px';
    btnEdit.style.height = '20px';
    btnEdit.style.marginLeft = '20px';
    btnEdit.style.textAlign = 'right';
    btnEdit.disabled = true;
    itemDivTodo.appendChild(btnEdit);

    //create delete button and append to li
    let btnDelete = document.createElement('input');
    btnDelete.type = 'image';
    btnDelete.src = '/Images/delete.png';
    btnDelete.style.width = '20px';
    btnDelete.style.height = '20px';
    btnDelete.style.marginLeft = '20px';
    btnDelete.style.textAlign = 'right';
    btnDelete.disabled = true;
    itemDivTodo.appendChild(btnDelete);

    //append itemDivtodo to outer divTodoList
    divTodoList.appendChild(itemDivTodo);

    //check is there is items inside main div to do list
    if (divTodoList.childElementCount === 1) {
        divTodoList.style.border = 'solid 1px black';
        divTodoList.style.width = '50%';
        divTodoList.hidden = false;
        h2Todo[0].childNodes[1].hidden = false;
    }

    //clear inputAdd, after user clicks on btnAdd
    inputAdd.value = '';
    inputAdd.focus();

}

// check if local storage array is not null and  has items
let arrayFromLocalStorage = JSON.parse(localStorage.getItem('itemsArray'));
if (arrayFromLocalStorage != null && arrayFromLocalStorage.length > 0) {
    //copy the local storage items to todo list array
    arrTodoList = [...arrayFromLocalStorage];
    //show the list from local storage    
    for (let i = 0; i < arrTodoList.length; i++) {
        if (arrTodoList[i] != null) {
            AddItems(arrTodoList[i]);
        }
    }
}

//get the Add button
const btnAdd = document.getElementById('btnAdd');

//add items to div
btnAdd.onclick = () => {
    if (inputAdd.value != '') {
        //adding item to the array for local storage
        arrTodoList.push(inputAdd.value)
        //add todo list array to local storage
        localStorage.setItem('itemsArray', JSON.stringify(arrTodoList));
        AddItems(inputAdd.value);
    } else {
        lblErrorMessage.style.marginLeft = '20px';
        lblErrorMessage.style.color = 'red';
        lblErrorMessage.innerText = 'Please enter items to add.';
    }

};

//clear the error message when focus shifts to inputAdd
inputAdd.onfocus = () => {
    lblErrorMessage.innerText = '';
}


