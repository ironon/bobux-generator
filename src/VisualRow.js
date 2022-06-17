import { useState } from "react";
import { nanoid } from "nanoid";
function VisualRow(props) {
    let imgs = []
  
    for (let i = 0; i < props.amount; i++) { 
        imgs.push(<img src={props.icon} key={"icon-" + nanoid()} alt={props.name}></img>)
    }
    return (
        <div className="VisualRow">
            {imgs}
        </div>
    )
}
export default VisualRow;