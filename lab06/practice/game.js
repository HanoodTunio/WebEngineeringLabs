const container = document.getElementById('container');
const createBall = document.getElementById('Button');

createBall.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('circledive')
    container.appendChild(newDiv);
});