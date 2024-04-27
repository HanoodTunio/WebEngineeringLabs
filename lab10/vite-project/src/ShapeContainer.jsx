import React from "react";
import Rectangle from "./Rectangle";
import Square from "./Square";
import Circle from "./Circle";


export default function ShapeContainer(){
    return(
        <div
        style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <div className="container">
                <Rectangle/>
                <Square/>
                <Square size = {200} color = "#FF7F7F"/>
                <Circle/>
                <Circle size = {150} color = "#FF7F7F"/>
            </div>
        </div>
    );
}