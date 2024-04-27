import React, { useState } from "react";
import "./Chameleon.css";
import Circle from "./Circle";

const Chameleon = () => {
    const [circleColor, setCircleColor] = useState("#077b8a");

    const handleButtonClick = (color) => {
        console.log("Clicked button with color:", color);
        setCircleColor(color);
    };
    
    return(
        <div className="container">
            <div className="buttonArea">
                <button
                    style={{
                        backgroundColor: "#FFC0CB"
                    }} 
                    onClick={() => handleButtonClick("#FFC0CB")} 
                >Pink</button>

                <button
                    style={{
                        backgroundColor: "#a2d5c6"
                    }}
                    onClick={() => handleButtonClick("#a2d5c6")}
                >Sea-foam</button>

                <button
                    style={{
                        backgroundColor: "#077b8a"
                    }}
                    onClick={() => handleButtonClick("#077b8a")}
                >Jade</button>
                
                <button
                    style={{
                        backgroundColor: "#e75874"
                    }}
                    onClick={() => handleButtonClick("#e75874")}
                >Violet</button>
                
            </div>
            <Circle color = {circleColor}/>
        </div>
    );
}

export default Chameleon;