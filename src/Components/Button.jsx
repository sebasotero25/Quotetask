import React from 'react'

const Button = ({buttonC, colorR}) => {
  return (
    <button className='btn-card' onClick={buttonC} style={{color : colorR}}>&#62;</button>
  )
}

export default Button