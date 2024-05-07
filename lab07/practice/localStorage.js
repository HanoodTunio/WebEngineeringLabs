const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');

const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');

//nameElement.innerText = localStorage.Myname;
nameElement.innerText = localStorage.getItem('Myname');

nameInput.addEventListener('input', (e) =>{
    console.log(e.target.value);
    //localStorage.Myname = e.target.value;
    // or
    localStorage.setItem('Myname', e.target.value);
    nameElement.innerText = localStorage.getItem('Myname');
})


ageElement.innerText = localStorage.getItem('Myage');

ageInput.addEventListener('input', (e) =>{
    console.log(e.target.value);
    //localStorage.Myname = e.target.value;
    // or
    localStorage.setItem('Myage', e.target.value);
    ageElement.innerText = localStorage.getItem('Myage');
})