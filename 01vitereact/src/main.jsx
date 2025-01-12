import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return (
      <div>
          <h1>this is my app !</h1>
      </div>
  )
}

// const ReactElement ={
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


// const anotherElement = (
//   <a href="http://google.com" target='_blank'>visit google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'http://google.com' , 
//     target: '_blank'
//   },
//   'click me to visit google'
// )


createRoot(document.getElementById('root')).render(

    // <MyApp/> from this we can also call function
    // MyApp()

  <App/>

  // <ReactElement/>

  // reactElement

)
