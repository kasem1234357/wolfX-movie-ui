
import React, { useState, useRef } from 'react';
import '../../../styles/verificationBox.css';
import VerificationInput from './VerificationInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { startVerifiedOperation } from '../../../utils/startVerfiedOperation';
import { handleClick } from '../../../configs/notificationConfig';
import { useNavigate } from 'react-router-dom';

function VerificationBox() {
  const userId = useSelector(state => state.users?.user?._id)
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value,setValue]=useState([])
  const sendCode = ()=>{
    axios.post('https://wolfxmovie2.onrender.com/api/auth/set-verified',{
       userId,
       code :value.join('')
      }).then(res =>{
        navigate('/')
        handleClick({type:"success",msg:"code sended successifly"})
      }).catch(err =>{
         handleClick({type:"error",msg:"some thing going wrong"})
      })
  }
  return (
    <div className='flex center f-column padding'>
      <h2 className='text-white'>verification code</h2>
      <div className='flex flex-between padding fill' style={{ gap: '10px', height: '65px' }}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <VerificationInput key={index} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} inputIndex={index} code={value} setValue={setValue} />
        ))}
      </div>
      <button className='check-btn' onClick={sendCode}>check</button>
      <p className='text-white'>this code will be invalid after <span className='text-main'>15 min</span></p>
      <div className='flex flex-between fill '>
        <button className='back-btn'>back</button>
        <button className='resend-btn bg-main' onClick={()=>{
          startVerifiedOperation(userId,[
            {
               callback:handleClick,
               arg:[{type:"success",msg:"code sended successifly"}]
            },
         ],[
            {
               callback:handleClick,
               arg:[{type:"error",msg:"some thing going wrong"}]
            }
         ])
        }}>resend</button>
      </div>
    </div>
  );
}

export default VerificationBox;