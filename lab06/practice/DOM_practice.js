
const container = document.getElementById('container');
const addButton = document.getElementById('add_button');
const removeButton = document.getElementById('remove_button');

//Maniplating the buttons

addButton.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'New div';
    container.appendChild(newDiv);
    console.log("hello");
});
removeButton.addEventListener('click', () => {
    const lastDiv = container.lastElementChild;
    container.removeChild(lastDiv); 
});