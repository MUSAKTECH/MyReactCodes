import PropTypes from 'prop-types';
const Button = ({color, text, onClick}) => {
     
    return (
    <button onClick = {onClick} style = {{ backgroundColor: color}}
        className = 'btn'>{text}</button>
    )
}
//     Button.defaultProps = {
//     color:'steelblue',
// }
//On using propTypes,if it has a trailing decimal point
//the first letter will be a lower case.
    Button.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string,
    onClick: PropTypes.func
}
export default Button