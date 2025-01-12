import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

    // this is use of hooks which change all the value of web where he find to change
    let [counter, setCounter] = useState(10);  

    // let counter = 10;

    const addValue = () => {
      // console.log("Clicked " , counter);
      // counter=counter+1;
      if(counter>=20) setCounter(20);
      else
        setCounter(counter+1)

        /*
        if you want to increase the more counter value then use setCounter multiples times
        as giver below
        setCounter(preCounter => preCounter +1)
        setCounter(preCounter => preCounter +1)
        setCounter(preCounter => preCounter +1)
        setCounter(preCounter => preCounter +1)
        setCounter(preCounter => preCounter +1)
        setCounter(preCounter => preCounter +1)
        setCounter(preCounter => preCounter +1)
        */
    }

    const removeValue = () => {
      // console.log("Clicked " , counter);
      if(counter<=0 ) setCounter(0);
      else
        setCounter(counter-1)
    }

  return (
    <>
      <h1>chai and react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}> Add value {counter} </button>
      <br/>
      <button onClick={removeValue}> removeValue {counter} </button>

      <p>footer: {counter} </p>

    </>
  )
}

export default App
