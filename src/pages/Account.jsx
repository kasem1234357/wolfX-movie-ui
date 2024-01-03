import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

import { useLocation } from 'react-router-dom'
import VerificationBox from '../components/Boxes/verificationBox/VerificationBox'
function Account() {
 const [login,setLogin]=useState(true)
 const location = useLocation()
 const operationType = location.state?location.state.type:''
  return (
   <div className='flex center form-box f-column'>
    <div className="box2 bg-gray flow">
      {operationType === 'verification'?<VerificationBox/>:
        <>
        <nav className='flex nav-form text-white'>
        <div className={login?'form-active uppercase':'uppercase'} onClick={()=>setLogin(true)}>Log in</div>
        <div className={!login?'form-active uppercase':'uppercase'} onClick={()=>setLogin(false)}>Sign up</div>
       </nav>
       {login?<Login/>:<Register/>}
       </>
      }
    
    </div>
    
   
   
   
 </div>
  )
}

export default Account