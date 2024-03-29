import axios from 'axios'
import React, { useState } from 'react'
// import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../components/custom/FormInput'
// import { contextData } from '../dataBase/context'
import {schema} from '../utils/validateSchema'
import {useDispatch, useSelector} from "react-redux"
import '../styles/form.css'
import { getStatus } from '../redux/slices/userSlice'
import { useEffect } from 'react'
import { logUser } from '../redux/actions/auth'
function Login() {
  const Navigate = useNavigate()
  const dispatch = useDispatch();

  const status = useSelector(getStatus)
  // const {setUserData} = useContext(contextData)
  const [values,setValues]=useState({
    email:'',
    password:''
  })
  
  const onChange=(e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }
  const handleSubmit2 = (e)=>{
    e.preventDefault();
    console.log(values);
    dispatch(logUser(values)) 
  }
  useEffect(()=>{
    if(status === "succeeded"){
      Navigate('/')
    }
  },[status])
  return (
    <div className="form-box2 bg-gray flex f-column padding">
   <form className='bg-gray flex f-column flow text-white' onSubmit={handleSubmit2}>
     
   {schema(values).login.map(input=>{

return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
})}
     <div className='flex flex-between checkbox'>
       <div className='flex center' >
        
       <input className='none' type="checkbox" name="remmember" id="remmember" />
       <label className='custom-check' htmlFor="remmember"></label>
       <span>Remmember me</span>
       </div>
     
     <p className='text-main'>forget password</p>
     </div>
     {status === 'loading'? <span className='loaderX2'></span> : <input className='submit ' type="submit" value={
      status === "loading"?"":'Login Now'} />}
    
   </form>
   </div>
  )
}

export default Login