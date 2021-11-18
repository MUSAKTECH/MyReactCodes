import { render } from '@testing-library/react';
// import React from 'react'
// import './index.css';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
// import { Component } from 'react';
const App = () => {
  const myLife = {
    fontFamily:"Aerial",
    textAlign:"center" ,
    fontSize:50
  }

  // return(<h1>{React.createElement( "div", 
  //     null, {customize})}</h1>)
  return(
    <div className = 'container'>
       <h1 style = {myLife}>Welcome to React Crash Course!</h1>
      <Header title = 'Hello World!' />
    </div>
    
    
  )
}
//This code shows CSS in JS
//And inline CSS codes need to be wrap with double 
//curly brace. 

//<h1 style = {{color:'red' ,backgroundColor:'black'}}>Welcome to React Crash Course!</h1>

//But if we are to create and store in a variable name 
//so that we will be able to call the variable name later,
//we do it this way and it requires single curly brace.


  // <div>
    // <h1>I</h1>
    // <h2>LOVE</h2>
    // <p>Rice</p>
    // </div>

{/* <h1 data-demoAttribute = "demo" > */}
    {/* {React.createElement( "div" , null, "Hello JavaTpoint")} */}
    {/* {React.createElement("div" ,null, "Welcome to JavaTpoint")} */}
    {/* {React.createElement( "div" , null, "Hello React!")} */}
    




// class App extends React.Component {
//   render() {
//     return <h2>Hello from React JavaScript</h2>
//   }
// }
// function App() {
//   // const name = 'Mudhakir'
//   return (
//     <div className = 'container'>
//       <h1>Hello from react</h1>
//       </div>
//   )
// }

export default App;
// export default App1;
