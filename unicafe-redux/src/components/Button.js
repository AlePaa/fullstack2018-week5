import React from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick} id={text}>
    {text}
  </button>
)

export default Button
