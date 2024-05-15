import React from "react";

export default function Circle(props) {
    const { size, color } = props;

  return (
    <div
      style={{
        height: `${size || 100}px`,
        width: `${size || 100}px`,
        borderRadius: "50%",
        backgroundColor: `${color || '#077b8a'}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "bold"
        }}
    >
      I am Circle
    </div>
  );
}
