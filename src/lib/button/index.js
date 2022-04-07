import React from 'react'
import './style.css'
const CyberButton = ({ text }) => (
    <button className='Cyber-green-button'><span data-text={text} className="intoButton">{text}</span></button>
);
export default CyberButton