import React from 'react'
// import ReactDOM from 'react-dom'

function You(props){
    const x = <h1 style = {{display:props.Question ? "block" : "none"}}>Question:{props.Question}</h1>
    return(
        <div>
            {/* <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>  */}
            {/* <h1 style = {{borderRadius:15}}>{x}</h1>  */}
            <h1 style = {{backgroundColor:"purple"}}>{x}</h1>            
            <h2 style = {{backgroundColor:"green"}}>Answer: {props.Answer}</h2>
            <hr/>
        </div>
    )
}
export default You