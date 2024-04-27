import React from "react";

export default function Circle(props) {
    const { size, color } = props;

  return (
    <div
      style={{
        height: `${size || 100}px`,
        width: `${size || 100}px`,
        borderRadius: "50%",
        backgroundColor: `${color || '#e6e6fa'}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
    >
      I am Circle
    </div>
  );
}
