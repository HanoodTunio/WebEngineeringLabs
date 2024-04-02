
const container = document.getElementById('container');
const addButton = document.getElementById('add_button');
const removeButton = document.getElementById('remove_button');
const beforeButton = document.getElementById('insert_before')

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

beforeButton.addEventListener('click', () =>{
    const newP = document.createElement('p');
    newP.textContent = 'New Paragraph tag is inserted before the Buttons';
    const firstChild = container.firstElementChild;
    if (firstChild){
        container.insertBefore(newP, firstChild);
    }
    else{
        container.appendChild(newP);
    }
});