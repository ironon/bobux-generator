import { useState } from "react";
import VisualRow from "./VisualRow";
import { nanoid } from "nanoid";
import Buyables from "./Buyables";

function BobuxVisuals(props) {
    let playerInfo = props.game[0].buyables
   
    let rows = Object.keys(playerInfo).map(key => {
        let buyable = Buyables[key]
        return (
            <VisualRow name={buyable.name} key={"row-" + nanoid()} icon={buyable.icon} amount={playerInfo[key].amount}/>
        )
    })
    
    return (
        <div className="BobuxVisuals">
            {rows}
       
        </div>
    )
}

export default BobuxVisuals;