import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd , showAdd}) => {
    // const onClick = () => {
    //     console.log('ahhhhh!')
    // }

    
  return (
    <header className='header'>
    News Portal Application
    <h1 style={headingStyle}>{title}</h1>
    <Button color={showAdd ? 'Red':'Green'} text={showAdd ? 'Close': 'Add'} onClick={onAdd} />
    </header>
  )
}
Header.defaultProps = {
    title: 'Mera Project',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
const headingStyle = {
    color: 'blue' , backgroundColor:'yellow'
}

export default Header