import { useState } from "react";

function Square({value, onSquareClick, line_pos, col_pos}){
    return (
        <button 
            className="square"
            onClick={onSquareClick}
            style={{backgroundColor:value}}
            backgroundcolor={value}
            line_pos = {line_pos}
            col_pos = {col_pos}
        > 
        </button>
    )
}

export default Square;

