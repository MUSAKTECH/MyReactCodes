
import React from 'react'
import ReactDOM from "react-dom"

//The command below can only be used if we are using the same directory for our files.
// import MyHeader from './MyHeader'

//The command below can only be used if we have created root folder to house the different components of react.
import MyHeader from "./components/MyHeader"

//from the above code written,it's necessary to import React from react Library as we did.
//...and also it's necessary to import ReactDOM from react-dom Library.

ReactDOM.render(<MyHeader/>,document.getElementById("root1")
  )

//This is how to do with React functional components as shown below

// function MyApp(){
//   return(<div className = "">
//   <ul>
//     <li>This is No1</li>
//     <li>This is No2</li>
//     <li>This is No3</li>
//   </ul>
//   </div>
//   );
// }

// ReactDOM.render(
//   <MyApp/>, 
//   document.getElementById("root2")
//   )

// ReactDOM.render(<h1>Hello Man!</h1>,document.getElementById("root"))

//The code below here can be work only if and and if that we wrap the two element in one div.

// ReactDOM.render(<div><h1>Hello Man!</h1><p>The Man is in the garden</p></div>, document.getElementById("root1"))
//A react code can be executed only if there is an id contain in the html file. 
// ReactDOM.render(<p>The Man is in the...</p>,document.getElementById("root1"))
var myName = document.createElement("h2")
// document.getElementById("root").innerHTML = myName;
myName.innerHTML = "This is a paragraph."

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root1')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
