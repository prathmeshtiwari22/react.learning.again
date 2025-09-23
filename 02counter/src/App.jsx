import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcounter] = useState(0);

  const addValue = ()=>{
      console.log("clicked",counter);
      setcounter(counter+1);
  }
  const removeValue = ()=> {
    console.log("clicked",counter);
    if(counter>0){
        setcounter(counter-1);
    }
    else{
      setcounter(0)
    }
    
  }

  return (
    <>
     <h1>CHAI AUR REACT</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>ADD VALUE {counter}</button>
     <br/>
     <button onClick={removeValue}>Remove value {counter}</button>

     <p> footer: {counter}</p>
    </>
  )
}

export default App
