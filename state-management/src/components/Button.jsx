import React from "react";
import { useState } from "react";
import ColorCounter from "./ColorCounter";


const Button = (props) => {
    const [colorCounters, setColorCounters] = useState([])

    const handleClick = () => {
        setColorCounters([...colorCounters, "red"])
    }

    return(
        <div>
            <button type="button" onClick={() => handleClick()}>Generate Counter</button>
            <div>
                {colorCounters.map((color, idx) => {
                    return (
                        <ColorCounter 
                            key={idx} 
                            counterColor={color}
                            onClick={props.onClick}
                        />
                    );
                })
                }
            </div>
        </div>
    );
}

export default Button
