import React from 'react'
import './style.css'
const Button = ({text, onClick, changeValue}) => {
  return (
    <button className = "signButton" onClick={() => onClick(changeValue)}>{text}</button>
  )
}

export default Button
