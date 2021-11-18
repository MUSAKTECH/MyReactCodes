// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//impt can be use to import PropTypes

//The function below is called arrow function, and using
//props to call in what is stores in a variable name,like
//title:'Mr Ade'.
const Header = (props) => {
    //Note that,when an element is being imported,like the Button
    //...imported above, the closing tag will be like this
    //<Button/> but if not imported, it will the same as normal
    //...opening and closing tag.

    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
        {/* <h6>{props.title}</h6> */}
        <Button color ='green'  text='React' onClick = {onClick} />
        <Button color ='red'  text='Crash'/>
        <Button color ='blue'  text='Course'/>
        </header>
        // <button className = 'header'>In the garden</button>
    )
}
// Header.defaultProps = {
//     title:'Task Tracker'
// }

export default Header
