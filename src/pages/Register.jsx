import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/custom/FormInput';
import { handleClick } from '../configs/notificationConfig';
import { addUser, getStatus } from '../redux/slices/userSlice';
// import { contextData } from '../dataBase/context';
import { schema } from '../utils/validateSchema';
import { register } from '../utils/registerFn';
function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const status = useSelector(getStatus)
  // const {setUserData} = useContext(contextData)
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-box2 bg-gray flex f-column padding">
    <form className='bg-gray flex f-column flow text-white' onSubmit={(e)=>{register(e,values,{navigate,dispatch})}}>
      
      {schema(values).signUp.map(input=>{

      return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      })}
      <div className='flow'>
        <div className='flex ' >
         
        <input className='none' type="checkbox" name="remmember" id="remmember" />
        <label className='custom-check' htmlFor="remmember"></label>
        <span className='checkbox-text'>Remmember me</span>
        </div>
        <div className='flex ' >
         
        <input className='none' type="checkbox" name="terms" id="terms" />
        <label className='custom-check' htmlFor="terms"></label>
        <span className='checkbox-text'>I have raccepted the <span className='text-main'>terms and conditions</span></span>
        </div>
      
      
      </div>
      {status === 'loading'? <span className='loaderX2'></span> : <input className='submit ' type="submit" value={
      status === "loading"?"":'Login Now'} />}
    </form>
    </div>
  )
}

export default Register
