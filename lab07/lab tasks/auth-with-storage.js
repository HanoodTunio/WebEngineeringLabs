const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('login');
const signoutButton = document.getElementById('signout');

// Retrieve the stored user object from local storage
const storedJSON = localStorage.getItem('user');   
const storedUser = JSON.parse(storedJSON);


loginButton.addEventListener('click', () => {
    const enteredUsername = username.value;
    const enteredPassword = password.value;



        // Check if the entered username and password match the stored user
    if (enteredUsername === storedUser.username && enteredPassword === storedUser.password) {
        alert("Successfully logged in");
        window.location.href = 'home.html';
    } 
   else {
        alert("Incorrect username or password");
    }

});


signoutButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "/";
})
