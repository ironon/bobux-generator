//import Buyables
import Buyables from './Buyables.js';
import BuyRow from './BuyRow.js';
import {nanoid} from 'nanoid';
function ScaledPrice(price, amount) {
    return Math.round(price * Math.pow(1.15, amount))
}



function BobuxBuy(props) {
    let game = props.game[0]
    let bobux = props.bobux.bobux
    let setBobux = props.bobux.setBobux
    let setGame = props.game[1]
   
    const buyItem = (key) => {
            
        let price = 0
        let item = game.buyables[key]
        if (item == undefined) {
            price = Buyables[key].price
        } else {
            price = ScaledPrice(Buyables[key].price, game.buyables[key].amount)
        }
        if (price > bobux) {
            props.alert("You don't have enough bobux LOL. get richer!!!")
            return
        }
        setBobux(bobux - price)
        if (game.buyables[key] == undefined) { game.buyables[key] = {amount:0} }
        let templateItem = Buyables[key]
        game.buyables = {...game.buyables, [key]:{...game.buyables[key], bobuxPerSec:templateItem.bobuxPerSec, amount:game.buyables[key].amount + 1}}

        

    }
    let rows = Object.keys(Buyables).map(key => {
        return (
            <BuyRow key={"buyrow-" + nanoid()} kkey={key} buyable={Buyables[key]} ScaledPrice={ScaledPrice} buyItem={buyItem} playerInfo={game.buyables}/>
        )
    })
    return (
        <div className="BobuxBuy">
            
            {rows}

        </div>
    )
}

export default BobuxBuy;