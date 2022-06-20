let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById("toDoContainer"); 
let inputField = document.getElementById("text");
let deleteButton = document.getElementById("delete-button");

//test2

addToDoButton.addEventListener('click', function(){ 
    let paragraph = document.createElement('ul'); 
    paragraph.classList.add('paragraph-styling'); 
    paragraph.innerText = inputField.value; 
    toDoContainer.appendChild(paragraph); 
    inputField.value = ""; 

    deleteButton.addEventListener('click', function(){ 
        toDoContainer.removeChild(paragraph);
})
})