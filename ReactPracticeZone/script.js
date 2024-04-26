const basket01count = document.getElementsByClassName('basket-01')[0].getElementsByTagName('span')[0];
const basket02count = document.getElementsByClassName('basket-02')[0].getElementsByTagName('span')[0];

const leftArrow = document.querySelector(".left-arrow"); // Added '.' before class name
const rightArrow = document.querySelector(".right-arrow"); // Added '.' before class name
const totalApple = 100;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApple - secondBasketAppleCount;

basket01count.innerText = firstBasketAppleCount;
basket02count.innerText = secondBasketAppleCount;

rightArrow.addEventListener('click', () => {
    if (firstBasketAppleCount > 0){
        firstBasketAppleCount--;
        basket01count.innerText = firstBasketAppleCount;
        secondBasketAppleCount++;
        basket02count.innerText = secondBasketAppleCount;
    }
});


leftArrow.addEventListener('click', ()=>{
    if(secondBasketAppleCount > 0){
        firstBasketAppleCount++;
        basket01count.innerText = firstBasketAppleCount;
        secondBasketAppleCount--;
        basket02count.innerText = secondBasketAppleCount;
    }
});