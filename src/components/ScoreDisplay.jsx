import { useState } from "react";

function ScoreDisplay({value}){
    return(
        <div className="score-board">
            <p> Player 1 turn? {value}</p>
        </div>
    )
}

export default ScoreDisplay;