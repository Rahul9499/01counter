import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCount] = useState(15)

// let counter = 15;

const addValue = () => {
counter = counter + 1;
setCount(counter);
console.log("clicked", counter);

}

const removeValue = () => {
  setCount(counter - 1)
}


  return (
    <>
    <h1>chai aur code</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue} >Add Value</button>
    <br />
    <button onClick = {removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>

    <br />

    </>
  )
}

export default App
