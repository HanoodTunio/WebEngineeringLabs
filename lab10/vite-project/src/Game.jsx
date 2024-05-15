import React, { useState } from 'react';
import './Game.css';
import GameUser from "./GameUser";

function Game() {
    const [users, setUsers] = useState([]);

    const addUser = () => {
        setUsers(prevUsers => [...prevUsers, <GameUser key={prevUsers.length} />]);
    };

    return (
        <div className="container">
            <button className="addButton" onClick={addUser}>
                Add users
            </button>
            {users}
        </div>
    );
}

export default Game;
