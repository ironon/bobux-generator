import { useState } from "react";
import Buyables from "./Buyables";

//A function that takes an int as an input and returns a string which is the int but with commas every 3 characters
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //no clue what just happened here but github copiolet big brain
}

function BuyRow(props) {
    let buyable = props.buyable
    let key = props.kkey
    let playerInfo = props.playerInfo
    let info = playerInfo[key]
    let price
    if (info != undefined) {
        price = props.ScaledPrice(buyable.price, playerInfo[key].amount)
    } else {
        price = buyable.price
    }
    
   
    const playerbuyable = playerInfo[key] || {}
    const amount = playerbuyable.amount == undefined ? 0 : playerbuyable.amount
    
    let onClick = () => {
        
        console.log("clicked")
        props.buyItem(key)
    }
    
    let keys = Object.keys(Buyables)
    let index = keys.indexOf(key)
    let prevKey = keys[index - 1]
    let prevBuyable = playerInfo[prevKey]
    
    let logic = false

    try {
       
        if (Object.keys(Buyables)[0] == key) {
            logic = true
        }

        if (prevBuyable != undefined) {
            logic = true
        }
        
    } catch (e) {
     //pass   
    }
    
    
    if (logic == false) {
        return null
    }
    

    
    return (
        <div id="BuyRow" onPointerDown={onClick} onTouchStart={onClick} onClickCapture={onClick} >
            <div id="BuyRowMain">
                <img id="buyableicon" src={buyable.icon}></img>
                <span id="buyabletitle">{buyable.name}</span>
                <span id="buyableprice"> {addCommas(price)}฿</span>
                <span id="buyableamount"> {amount}</span>
                
            </div>
            <div id="BuyRowDesc"> 
                <p id='buyabledesc'>
                    {buyable.description}
                </p>
            </div>
                
        </div>
    )
    
} 

export default BuyRow