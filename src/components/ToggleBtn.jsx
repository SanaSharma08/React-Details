import React from 'react'
import { useState } from 'react'

const ToggleBtn = () => {
    const [isButtonOn, setIsButtonOn] = useState(false);
    function handleClick(){
        setIsButtonOn(!isButtonOn)
    }
  return (
    <>
        <button 
        className={isButtonOn ? "button-on" : "button-off"} 
        onClick={handleClick} 
        style={{
            backgroundColor: isButtonOn ? "green" : "red",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            width: "100px",
        }}>
        {isButtonOn ? "ON" : "OFF"}
        </button>
    </>
  )
}

export default ToggleBtn