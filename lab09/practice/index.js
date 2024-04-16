let users = [];
const container = document.getElementById("container");

const getUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((apiResult) => apiResult.json())
    .then((data) =>{
      users = data;
      console.log(data);

      users.forEach((user) => {
        container.innerHTML += `<div class="user">
        <img
          src="https://api.dicebear.com/8.x/notionists/svg?seed=${user.username}"
          alt="avatar"
        />
        <div>name : ${user.name}</div>
        <div>username : ${user.username}</div>

        <div>email : ${user.email}</div>
      </div>
    `;
      });
    });
getUsers();