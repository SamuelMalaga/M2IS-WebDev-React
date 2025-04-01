import { useState } from "react";

import Square from './Square';
import ScoreDisplay from "./ScoreDisplay";

function Board(){

    const [p1Turn, setp1Turn] = useState(true);
    const [boardValues, setBoardValues] = useState( () =>{
        const initialBoardState = Array.from({length: 8}, ()=> Array(8).fill(null))
        initialBoardState[3][3] = "white";
        initialBoardState[3][4] = "black";
        initialBoardState[4][3] = "black";
        initialBoardState[4][4] = "white";
        return initialBoardState;
    });
    // m - > line, n -> column
    function handleClick(m,n){
        const nextBoardValues = boardValues.slice();
        var surroundings = {
            top: m-1<0 ? null : nextBoardValues[m-1][n],
            bottom: m+1 > 7 ? null: nextBoardValues[m+1][n],
            left: n-1 < 0 ? null : nextBoardValues[m][n-1],
            right: n+1 > 7 ? null:nextBoardValues[m][n+1],
            top_left: m-1 < 0 || n-1  < 0 ? null : nextBoardValues[m-1][n-1],
            top_right: m-1 < 0 || n+1>7 ? null : nextBoardValues[m-1][n+1],
            bottom_left: m+1>7 || n-1 < 0 ? null : nextBoardValues[m+1][n-1],
            bottom_right: m+1 > 7 || n+1> 7 ? null: nextBoardValues[m+1][n+1],
        }
        console.log(Object.values(surroundings))
        if(Object.values(surroundings).includes("white") || Object.values(surroundings).includes("black")){
            console.log("allowed play");
            if(p1Turn){
                nextBoardValues[m][n] = "white";
            } else {
                nextBoardValues[m][n] = "black";
            }
            setp1Turn(!p1Turn);
            setBoardValues(nextBoardValues)

        } else {
            window.alert("not allowed, next play must be adjacent to another filled position");
        }
        console.log("position of the clicked square | line:" + m + " | row: "+n)
        
    }
    return(
        <div className="board">
            <ScoreDisplay value={p1Turn.toString()}/>
            {
                //Generate the lines
                Array.from(Array(8).keys()).map((line_val)=>
                    <div className="board-row" line={line_val} key={line_val}>
                        <div className="row-number">
                            <p>{line_val}</p>
                        </div>
                        <div className="row-content">
                        {
                            //Generate the rows
                            Array.from(Array(8).keys()).map((column_val)=>
                                <Square 
                                value={boardValues[line_val][column_val]} 
                                onSquareClick={()=>handleClick(line_val,column_val)}
                                line_pos={line_val}
                                col_pos={column_val}
                                />
                            )
                        }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Board;