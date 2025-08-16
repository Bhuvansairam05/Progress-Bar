import React, { useEffect } from 'react';
import './App.css';
import { useState} from 'react';
function App() {
  const [color,setColor] = useState("black");
  const [progressBars, setProgressBars] = useState([]);
  function addProgress() {
    setProgressBars(prev => [...prev, 0]);
  }
  useEffect(()=>{
    setInterval(()=>{
    setProgressBars(
      prev=>prev.map(val=>val<100?val+10:100)
    )
  },100)
  },[])
  useEffect(()=>{
    document.body.style.backgroundColor=color;
  },[color])
  return (
    <>
      <h1 align="center">Progress Bar with Background Color Changer</h1>
      <div className="colors">
        <button style={{color:"green"}} className="color" onClick={()=>setColor("green")}>Green</button>
        <button style={{color:"red"}} className="color" onClick={()=>setColor("red")}>Red</button>
        <button style={{color:"blue"}} className="color" onClick={()=>setColor("blue")}>Blue</button>
        <button style={{color:"orange"}} className="color" onClick={()=>setColor("orange")}>Orange</button>
        <button style={{color:"purple"}} className="color" onClick={()=>setColor("purple")}>Purple</button>
        <button style={{color:"Brown"}} className="color" onClick={()=>setColor("Brown")}>Brown</button>
        <button style={{color:"grey"}} className="color" onClick={()=>setColor("grey")}>Grey</button>
      </div>
      <button onClick={addProgress} className='add-new-progress'>Add Progress Bar</button>
      <div className="container">
        {
          progressBars.map((progressbar,barIndex)=>{
            return <progress style={{backgroundColor:"white"}} key={barIndex} value={progressbar} max={100}></progress>
          })
        }
      </div>
    </>
  )
}
export default App