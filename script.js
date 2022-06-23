let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById("toDoContainer"); 
let inputField = document.getElementById("text");
let clearButton = document.getElementById("clear-button");


addToDoButton.addEventListener('click', function(){ 
    let paragraph = document.createElement('ul'); 
    paragraph.classList.add('paragraph-styling'); 
    paragraph.innerText = inputField.value; 

    if (inputField.value == "") {
        alert ("Please fill out all boxes")
      }
      
    else {
    toDoContainer.appendChild(paragraph); 
    inputField.value = ""; 
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button'); 
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 120px';
    paragraph.appendChild(deleteButton);

    clearButton.addEventListener('click', function(){ 
        toDoContainer.removeChild(paragraph);
    })
    deleteButton.addEventListener('click', function(){ 
        toDoContainer.removeChild(paragraph);
    })
}})