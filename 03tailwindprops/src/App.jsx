import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username:"raushan",
    age: 21
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
        <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card username="raushan" cost_of_product="$9" />
      <Card username="ahir" />
    </>
  )
}

export default App
