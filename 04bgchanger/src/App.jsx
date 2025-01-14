import {useState } from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2 ">
          <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl">

            <botton onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</botton>

            <botton onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</botton>

            <botton onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</botton>

            <botton onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>yellow</botton>

            <botton onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>Olive</botton>

            <botton onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>purple</botton>

            <botton onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>pink</botton>

            <botton onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "lavender"}}>lavender</botton>

            <botton onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</botton>
          </div>
        </div>
      </div>
  )
}

export default App
