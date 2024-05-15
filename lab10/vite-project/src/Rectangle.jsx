import React from "react";

export default function Rectangle(props) {
  
  const {height, width, color, align, text} = props;
  return (
    <div
          style={{width: `${width || 100}px`, 
          position: "relative",
          height: `${height || 100}px`, 
          backgroundColor: `${color || "#98FB98"}`,
          display: "flex",
          justifyContent: "center",
          alignItems: align || "center",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "center",
          ...props.style
          }}
    >{text}</div>
  );
}