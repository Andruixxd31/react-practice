import React from "react";
import { useState } from "react";
import ColorCounter from "./ColorCounter";


const Button = ({count, handleCountChange }) => {
    const [colorCounters, setColorCounters] = useState([])
    const [color, setColor] = useState("red");

    const handleClick = () => {
        setColorCounters([...colorCounters, color])
    }

    const handleColorClick = () => {
        if(color === "red"){
            setColor("black");
        }else {
            setColor("red");
        }
    }

    return(
        <div>
            <button type="button" onClick={() => handleClick()}>Generate Counter</button>
            <h3 onClick={() => handleColorClick()}>Color {color}</h3>
            <div>
                {colorCounters.map((color, idx) => {
                    return (
                        <ColorCounter 
                            key={idx} 
                            color={color}
                            totalCount={count}
                            handleCountChange={() => handleCountChange()}
                        />
                    );
                })
                }
            </div>
        </div>
    );
}

export default Button
