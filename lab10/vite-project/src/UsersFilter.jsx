import "./users.css";
const UsersFilter = () => {
  const users = ["Zack", "Phill", "Tony", "Zoki", "Sylvie", "Zat", "Thor"];

  const filteredUsers = users.filter((user) => user.startsWith("Z"));
  return (
    <div>{filteredUsers} </div>
  );
};


export default UsersFilter;
