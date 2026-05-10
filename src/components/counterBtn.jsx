import React from 'react'
import { useState } from 'react'

const counterBtn = (props) => {
  const {count, setCount} = props
  function handleClick(){
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={handleClick}>The button was clicked {count} times</button>
    </>
  )
}

export default counterBtn