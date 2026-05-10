import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [showPassword, setShowPassword] = useState(false)
    function togglePassword(){
        setShowPassword(!showPassword)
    }
  return (
    <>
    <h2 style={{marginTop:"20px"}}>Hello, Welcome to my website</h2>
    <form className='login-form' style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"start",
            gap:"10px",
            marginTop:"20px",
            maxWidth:"400px",
            marginLeft:"auto",
            marginRight:"auto",
        }}>
        <input 
        type="text" 
        placeholder='Name' 
        className='form-name'
        style={{
            padding:"10px 20px",
            border:"1px solid black",
            borderRadius:"10px",
            boxShadow:"inset 0px -4px 2px rgba(100, 100, 100, 0.5)"
            
        }}
        />
        <input 
        type="email" 
        placeholder='Email' 
        className='form-email'
        style={{
            padding:"10px 20px",
            border:"1px solid black",
            borderRadius:"10px",
            boxShadow:"inset 0px -4px 2px rgba(100, 100, 100, 0.5)"
            
        }}
        />
        <div className="password-container"
        style={{
            display:"flex",
            flexGrow:"1",
            gap:"12px",
            alignItems:"center"
        }}
        >
            <input 
                type={showPassword ? "text" : "password"} 
                placeholder='Password' 
                className='form-password'
                style={{
                    padding:"10px 20px",
                    border:"1px solid black",
                    borderRadius:"10px",
                    boxShadow:"inset 0px -4px 2px rgba(100, 100, 100, 0.5)"
                    
                }}
            />
            <button 
            className="toggle-password-btn"
            onClick={togglePassword}
            type='button'
            style={{
                borderRadius:'5px',
                backgroundColor:"rgb(0,123,255",
                width:"90px",
            }}
            >
                {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>
        
        <div 
        className="form-buttons"
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            gap:"12px"
        }}>
            <button 
            type='submit'
            style={{
                backgroundColor:"rgb(0,123,255",
                borderRadius:"5px"
            }}
            >Login</button>
            <button 
            type='submit'
            style={{
                backgroundColor:"rgb(0,123,255",
                borderRadius:"5px"
            }}>Sign Up</button>
        </div>
        
    </form>
    </>
  )
}

export default Form