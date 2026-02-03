import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 let myObj={
  name: 'Amit',
  age: 21
 }

  return (
    <>
     <h1 className='text-xl bg-green-400 mb-4'>HELLO</h1>
    <Card username="Amit"/>
    <Card username="Deepak"/>

    </>
  )
}

export default App
