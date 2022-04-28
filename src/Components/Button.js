import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color , text , onClick }) => {
   return <button style={{backgroundColor: color}} onClick={onClick}  type="submit">{text}</button>
   //(
//     <div>Button</div>
//   )

}

Button.defaultProps = {
    color: 'grey'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button