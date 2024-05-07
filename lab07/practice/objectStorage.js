const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');

const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');




const myData = JSON.parse(localStorage.getItem('myData')) || {}

nameElement.innerHTML = myData.name;
ageElement.innerHTML = myData.age;

nameInput.addEventListener('input', (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    nameElement.innerText = e.target.value;

})

ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    nameElement.innerText = e.target.value;
})

