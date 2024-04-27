import React from "react";

export default function Square(props){
    const {size, color} = props;
    return(
        <div
            style={{width: `${size || 100}px`, 
                height: `${size || 100}px`, 
                backgroundColor: `${color || "#98FB98"}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
            }}
        >Hey I am Square</div>
    );
}