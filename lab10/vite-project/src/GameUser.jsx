import './Game.css';
function GameUser(){
    return (
        <div className="conatiner">
            <div className="user" style={{display: "inline-block"}}>User</div>
            <button className="btn">level 01</button>
            <button className="btn">level 02</button>
            <button className="btn">level 03</button>
            <button className="btn">level 04</button>
            <button className='btn' style={{backgroundColor: "seagreen", marginLeft: "80px"}}>Next</button>
        </div>
    )
}

export default GameUser;