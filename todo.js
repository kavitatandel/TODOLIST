//make an array to store data on browser's local storage
let arrTodoList = [];
//get the radio buttons
const selectedRadio = document.getElementsByName('radioTodo');

//make an array to hold completed todolist
let arrCompletedTodo = [];

//get h1Completed
const h1Completed = document.querySelector('.h1Completed');

//find the clearAll button
const btnclearAll = document.getElementById('clearAll');

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
function AddItems(item, indefOfItem) {

    //create div for each item
    let itemDivTodo = document.createElement('div');
    itemDivTodo.style.margin = '10px 0px';
    itemDivTodo.className = 'itemDivTodo';

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
    //added for edit
    txtItem.className = 'txt-item';
    //set the background color and border to look textbox as label
    //Note: when editing the items, need to change the style of textbox to lookalike textbox
    txtItem.style.background = 'rgba(0,0,0,0)';
    txtItem.style.border = '1px solid rgba(0,0,0,0)';
    itemDivTodo.appendChild(txtItem);

    //added on 7-12-2021
    //add the index of item
    let lblIndex = document.createElement('label');
    lblIndex.value = indefOfItem;
    lblIndex.innerText = indefOfItem;
    lblIndex.hidden = true;
    itemDivTodo.appendChild(lblIndex);

    // //create complete button and append to Div
    let btnComplete = document.createElement('input');
    btnComplete.type = 'image';
    btnComplete.src = '/Images/complete.png';
    btnComplete.style.width = '20px';
    btnComplete.style.height = '20px';
    btnComplete.style.marginLeft = '20px';
    btnComplete.style.textAlign = 'right';
    btnComplete.disabled = true;
    btnComplete.className = 'complete';
    itemDivTodo.appendChild(btnComplete);

    //create edit button and append to Div
    let btnEdit = document.createElement('input');
    btnEdit.type = 'image';
    btnEdit.src = '/Images/edit.png';
    btnEdit.style.width = '30px';
    btnEdit.style.height = '20px';
    btnEdit.style.marginLeft = '20px';
    btnEdit.style.textAlign = 'right';
    btnEdit.disabled = true;
    btnEdit.className = 'edit';
    itemDivTodo.appendChild(btnEdit);

    //create delete button and append to Div
    let btnDelete = document.createElement('input');
    btnDelete.type = 'image';
    btnDelete.src = '/Images/delete.png';
    btnDelete.style.width = '20px';
    btnDelete.style.height = '20px';
    btnDelete.style.marginLeft = '20px';
    btnDelete.style.textAlign = 'right';
    btnDelete.disabled = true;
    btnDelete.className = 'delete';
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
            // AddItems(arrTodoList[i]);
            AddItems(arrTodoList[i], i);
        }
    }
}

// check if local storage array is not null and  has items for completed list
let completedLocalStorage = JSON.parse(localStorage.getItem('itemCompleted'));
if (completedLocalStorage != null && completedLocalStorage.length > 0) {
    //copy the local storage items to todo list array
    arrCompletedTodo = [...completedLocalStorage];
    //display completed list
    const divCompletedTodo = document.getElementById('divCompletedTodo');
    divCompletedTodo.style.border = 'solid 1px black';
    divCompletedTodo.style.width = '50%';
    //display h1Completed and clear all button
    h1Completed.hidden = false;
    btnclearAll.hidden = false;
    for (let i = 0; i < arrCompletedTodo.length; i++) {
        //create textNode
        const pCompletedItem = document.createElement('p');
        pCompletedItem.innerText = arrCompletedTodo[i];
        divCompletedTodo.appendChild(pCompletedItem);
    }
}
else {
    //hide h1Completed  and clear all button  
    h1Completed.hidden = true;
    btnclearAll.hidden = true;
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

        // AddItems(inputAdd.value);
        AddItems(inputAdd.value, arrTodoList.length - 1);

        //added to refresh the page
        window.location.reload();
    } else {
        lblErrorMessage.style.marginLeft = '20px';
        lblErrorMessage.style.color = 'red';
        lblErrorMessage.innerText = 'Please enter items to add.';
    }
};

//when focus goes on input text element
inputAdd.onfocus = () => {
    //clear the error message when focus shifts to inputAdd
    lblErrorMessage.innerText = '';

    //unckeck the radio button and disable buttons (if any)
    if (arrTodoList != null && arrTodoList.length > 0) {
        const selectedRadio = document.getElementsByName('radioTodo');
        for (let i = 0; i < selectedRadio.length; i++) {
            if (selectedRadio[i].checked = true) {
                selectedRadio[i].checked = false;
                //get the parent node of the radio button
                const parentNode = selectedRadio[i].parentNode;
                //get the complete button
                const buttonComplete = parentNode.querySelector('.complete');
                //get the edit button
                const buttonEdit = parentNode.querySelector('.edit');
                //get the delete button
                const buttonDelete = parentNode.querySelector('.delete');

                buttonComplete.disabled = true;
                buttonEdit.disabled = true;
                buttonDelete.disabled = true;
            }
        }
    }
}

//enable complete button
const enableComplete = (buttonComplete) => {
    buttonComplete.disabled = false;
    buttonComplete.onclick = (e) => {

        //get the index of clicked item
        const indexOfItemToRemove = e.currentTarget.parentNode.querySelector('label').innerText;

        //add completed items to completed array list from arrTodoList
        arrCompletedTodo.push(arrTodoList[indexOfItemToRemove]);

        //remove item from arr Todo list
        arrTodoList.splice(indexOfItemToRemove, 1);

        //add todo list array and completed todo list to local storage
        localStorage.setItem('itemsArray', JSON.stringify(arrTodoList));
        localStorage.setItem('itemCompleted', JSON.stringify(arrCompletedTodo));

        //refresh the page to load changes
        window.location.reload();

        //display completed list in div
        const divCompletedTodo = document.getElementById('divCompletedTodo');

        //create label element
        const pCompletedItem = document.createElement('p');
        // pCompletedItem.innerText = arrCompletedTodo[arrCompletedTodo.length - 1];
        pCompletedItem.innerText = arrCompletedTodo.pop();
        divCompletedTodo.appendChild(pCompletedItem);

        //display h1Completed and clear all button
        h1Completed.hidden = false;
        btnclearAll.hidden = false;

    }
}

//enable edit button
const enableEdit = (buttonEdit) => {
    buttonEdit.disabled = false;
    buttonEdit.onclick = (e) => {
        //get the index of clicked item
        const indexOfItemToEdit = e.currentTarget.parentNode.querySelector('label').innerText;
        const txtItem = e.currentTarget.parentNode.querySelector('.txt-item');
        txtItem.disabled = false;
        //set the background color and border to look textbox for edit    
        txtItem.style.border = '1px solid black';
        txtItem.style.background = 'white';

        txtItem.onchange = (e) => {
            txtItem.innerText = e.target.value;
            arrTodoList[indexOfItemToEdit] = txtItem.value;

            //add todo list array to local storage
            localStorage.setItem('itemsArray', JSON.stringify(arrTodoList));

            //set the background color and border to look textbox as label
            //Note: when editing the items, need to change the style of textbox to lookalike textbox
            txtItem.disabled = true;
            txtItem.style.background = 'rgba(0,0,0,0)';
            txtItem.style.border = '1px solid rgba(0,0,0,0)';

            //refresh the page to load changes
            window.location.reload();
        }
    }
}

//enable delete button function
const enableDelete = (buttonDelete) => {
    buttonDelete.disabled = false;
    buttonDelete.onclick = (e) => {
        //get the index of clicked item
        const indexOfItemToRemove = e.currentTarget.parentNode.querySelector('label').innerText;
        arrTodoList.splice(indexOfItemToRemove, 1);
        //add todo list array to local storage
        localStorage.setItem('itemsArray', JSON.stringify(arrTodoList));
        //refresh the page to load changes
        window.location.reload();
    }
}

//disable all the buttons if radio button is unchecked
const disableButtons = (buttons) => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

// //get the radio buttons
// const selectedRadio = document.getElementsByName('radioTodo');
//loop through all the radio buttons
for (let i = 0; i < selectedRadio.length; i++) {

    //check box change event
    selectedRadio[i].onchange = () => {

        //first disable all buttons (which were previously enabled)-for all list items
        //this loop will run for all the todo list items
        for (let i = 0; i < selectedRadio.length; i++) {
            //get the parent node of the radio button
            const pNode = selectedRadio[i].parentNode;
            //get the edit button
            const bComplete = pNode.getElementsByClassName('complete');
            //get the edit button
            const bEdit = pNode.getElementsByClassName('edit');
            //get the delete button
            const bDelete = pNode.getElementsByClassName('delete');

            disableButtons(bComplete);
            disableButtons(bEdit);
            disableButtons(bDelete);
        }

        /////////////////////////This will run only when radio button is checked/////////////
        //get the parent node of the radio button
        const parentNode = selectedRadio[i].parentNode;
        //get the complete button
        const buttonComplete = parentNode.querySelector('.complete');
        //get the edit button
        const buttonEdit = parentNode.querySelector('.edit');
        //get the delete button
        const buttonDelete = parentNode.querySelector('.delete');

        //call enable complete button function
        enableComplete(buttonComplete)
        //call enable edit button function
        enableEdit(buttonEdit);
        //call enable delete button function
        enableDelete(buttonDelete);

    };
}

//clearAll button click event
btnclearAll.onclick = () => {
    localStorage.removeItem('itemCompleted');
    window.location.reload();
}



