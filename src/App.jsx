import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterBtn from './components/counterBtn'
import ToggleBtn from './components/ToggleBtn'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* lifting the state up */}
    <div className='buttons'><CounterBtn count={count} setCount={setCount}/><CounterBtn count={count} setCount={setCount}/></div>

    {/* Toggle Button */}
    <ToggleBtn/>

    {/* Form */}
    <Form/>

    </>
  )
}

export default App
