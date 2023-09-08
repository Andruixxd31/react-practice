import React from "react";

const ColorCounter = ({color, totalCount, handleCountChange}) => {
    return(
    
        <div style={{"backgroundColor": `${color}`}}>
            <h3>{color}</h3>
            <button type="button" onClick={() => handleCountChange()}>Count: {totalCount}</button>
        </div>    
    );
}

export default ColorCounter
