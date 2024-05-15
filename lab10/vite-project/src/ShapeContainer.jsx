import React from "react";
import Rectangle from "./Rectangle";
import Square from "./Square";
import Circle from "./Circle";
import CounterComponent from "./CounterComponent";


export default function ShapeContainer(){
    return(
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
        
        }}> 

            <div className="container" 
            style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "seagreen",
            height: "85vh",
            width: "120vh",
            marginTop: "54px"
            }}>
                {/* <Rectangle/> */}
                {/* <Square/>
                <Square size = {200} color = "#FF7F7F"/>
                <Circle/>
                <Circle size = {150} color = "#FF7F7F"/> */}

                <Rectangle width = {'920'} 
                height ={60} 
                color = "#FF7F7F" 
                alignItems= "flex-start"
                text= "NavBar"/>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "920px",
                    height: "420px",
                }}>
                    <Rectangle width = {'120'} 
                    height ={420} 
                    color = "#FF7F7F" 
                    alignItems= "flex-end"
                    text= "SideBar"/>

                    <div >
                        <Rectangle width = {'580'} 
                        height ={200} 
                        color = "#FF7F7F" 
                        alignItems= "flex-end"
                        text= {<CounterComponent />}
                        style={{ marginBottom: '20px' }} />

                        <Rectangle width = {'580'} 
                        height ={200} 
                        color = "#FF7F7F" 
                        alignItems= "flex-end"
                        text= {<CounterComponent />}/>
                    </div>


                    <Rectangle width = {'120'} 
                    height ={420} 
                    color = "#FF7F7F" 
                    alignItems= "flex-end"
                    text= "SideBar"/>
               
                </div>

                <Rectangle width = {'920'} 
                height ={60} 
                color = "#FF7F7F" 
                alignItems= "flex-end"
                text= "Footer"/>

                  
            </div>
        </div>
    );
}