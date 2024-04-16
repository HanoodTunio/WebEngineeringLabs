const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const heading = document.getElementById('heading');

let count = 0;

function handleIncrement() {
  count++;
  heading.innerText = count;
}

function handleDecrement() {
  if (count > 0) {
    count--;
    heading.innerText = count;
  }
}
