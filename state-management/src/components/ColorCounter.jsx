import React from "react";
import { useState } from "react";


const ColorCounter = ({counterColor, onClick}) => {
    const [color, setColor] = useState(counterColor);
    const [count, setCount] = useState(1);

    const handleColorClick = (e) => {
        e.stopPropagation();
        setCount(count + 1);
    }

    const handleColor = () => {
        setColor("black")
    }
    
    return(
        <div onClick={() => handleColor()}>
            <h3>{color}</h3>
            <button type="button" onClick={(e) => handleColorClick(e)}>Count: {count}</button>
        </div>    
    );
}

export default ColorCounter
