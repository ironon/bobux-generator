
import './App.css';
import BobuxClicker from './BobuxClicker';
import BobuxVisuals from './BobuxVisuals';
import BobuxBuy from './BobuxBuy';
import {useEffect, useState} from 'react';
import Buyables from './Buyables';
import React from 'react'

let time = 10
const alertt = (msg) => {
  // alert(msg)
  
  return

}
const useUnload = (fn, depen) => {
  const cb = React.useRef(fn);
  
  const unloadParams = () => {
      cb.current(depen[0], depen[1]);
  }
  React.useEffect(() => {
    
    window.addEventListener('beforeunload', unloadParams);
    return () => {
      window.removeEventListener('beforeunload', unloadParams);
    };
  }, [cb].concat(depen));
};

let stepMoney = () => {
  return
}



function App(props) {
  let saveData = JSON.parse(props.saveData)
  let [bobux, setBobux] = useState(saveData.bobux)
  let [bps, setBPS] = useState(0)
  let [game, setGame]  = useState({buyables:saveData.buyables});
  let [deletePrompt, setDeletePrompt] = useState(false)
  
 
  let unload = (bobux, game) => {
    props.setSaveData({bobux:bobux, buyables:game.buyables})
  }

  useUnload(unload, [bobux, game]) 
  let deleteData = () => {
    
    if (deletePrompt == false) {
      setDeletePrompt(true)
      alert("Are you sure you want to do this? Click Delete Data again if you are certain.")
      setTimeout(() => {
        setDeletePrompt(false)
      }, 10000)
      return
      
    }
    if (deletePrompt) {
     
        setGame({bobux:0, buyables:{}})
        setBobux(0)
        setBPS(0)
        
        
        
        return
    }

    
    
  }
  stepMoney = () => {
   
    let buyables = game.buyables
    let newBobux = 0
    Object.values(buyables).forEach(buyable => {
      newBobux += buyable.bobuxPerSec * buyable.amount * (time / 1000)
    })
    
    setBPS(newBobux * (1000 / time))
    setBobux(bobux + newBobux)
  }
  

  return (
    <div className="App"> 
      <div className="App-header">
        <h2>bobux generator :D</h2>
        <p className='bestperson'>by Iron#3098</p>
        <button onClick={deleteData} id="delete-data">Delete Data</button>
      </div>
      <div className="App-body">
        <BobuxClicker bobux={{bobux, setBobux}} game={[game, setGame]} bps={bps}/>
        <BobuxVisuals bobux={{bobux, setBobux}} game={[game, setGame]} />
        <BobuxBuy bobux={{bobux, setBobux}} game={[game, setGame]} alert={alertt}  />
      </div>
    </div>
  )
}

setInterval(() => {
  stepMoney()
}, time)



export default App;
