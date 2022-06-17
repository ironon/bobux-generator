import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let saveData = document.cookie
document.title = "Bobux Generator"

const setSaveData = (data) => {
 
  document.cookie = JSON.stringify(data)
  
}

if (saveData == "") {
  setSaveData({buyables:{}, bobux:0})
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App saveData={saveData} setSaveData={setSaveData}/>
  </React.StrictMode>
);

