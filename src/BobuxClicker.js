import bobuximg from "./assets/bobux.png"
import React, {useState} from "react";

function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //no clue what just happened here but github copiolet big brain
}
let tooltipRef
function BobuxClicker(props) {
    let [className, setClassNames] = useState("");
    tooltipRef = React.createRef();

    let bps = props.bps
    let bobux = props.bobux.bobux
    let setBobux = props.bobux.setBobux
   
    
    const onImgClick = () => {
        setClassNames("bobuximgactive")
       
        setBobux(bobux + (bps * 0.1) + 1)
        setTimeout(onAnimationEnd, 200)

    }
    const onAnimationEnd = () => {
        setClassNames("")
    }
    return (
        <div className="BobuxClicker">
            <h1 id="cookieCounter">Total Bobux: </h1>  <h1 id="cookieCounterColor">{addCommas(Math.round(bobux))}</h1> <h3> BPS:  {addCommas(Math.round(bps))}</h3>
            <img src={bobuximg} className={"bobuximg " + className} alt="bobux!!" onClick={onImgClick}></img>
            <span id="tooltip" ref={tooltipRef}>+ {addCommas(Math.round((bps * 0.1) + 1))}฿</span>
        </div>
    )
}

 

window.addEventListener('mousemove', (e) => {
    try {
        var x = e.clientX,
        y = e.clientY;
        tooltipRef.current.style.top = (y + 20) + 'px';
        tooltipRef.current.style.left = (x + 20) + 'px';
    } catch (e) {
        //pass  
    }
    
});

export default BobuxClicker;