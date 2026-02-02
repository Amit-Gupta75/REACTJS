import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter] = useState(15)

  const  AddValue = () => {
    
     setCounter(counter +1)
  }

  const  RemoveValue = () => {
    if(counter>0)
   setCounter(counter -1)
}

  return (
    <>
      <h1>Hello from App.js</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={AddValue}>Increase Value</button>
      <br></br>
      <br></br>
      <button onClick={RemoveValue}>Decrease Value</button>
    </>
  )
}

export default App
