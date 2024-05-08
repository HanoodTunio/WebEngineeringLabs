const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('login');

// Retrieve the stored user object from local storage
const storedJSON = localStorage.getItem('user');   
const storedUser = JSON.parse(storedJSON);


loginButton.addEventListener('click', () => {
    const enteredUsername = username.value;
    const enteredPassword = password.value;



        // Check if the entered username and password match the stored user
    if (enteredUsername === storedUser.username && enteredPassword === storedUser.password) {
        alert("Successfully logged in");
    } 
   else {
        alert("Incorrect username or password");
    }
    
});
