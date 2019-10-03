import React from 'react'
import './style.css'

const Button = (each) => 
    <button 
        className="btn btn-custom"
        onClick={each.onClick}
    >
        {each.name}
    </button>

export default Button;