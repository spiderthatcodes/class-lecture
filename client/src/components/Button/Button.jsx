import React from 'react'

const Button = ({text, onClick, changeValue}) => {
  return (
    <button onClick={() => onClick(changeValue)}>{text}</button>
  )
}

export default Button
