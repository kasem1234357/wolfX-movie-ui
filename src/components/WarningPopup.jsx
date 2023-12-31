import React, { useRef } from 'react'
import { useState } from 'react'
import { Warning } from '../icons/svgIcon'
import { sendReports } from '../utils/sendReports'
const WarningPopup = ({setActiveWarning,userId,type,showName,showId}) => {
  const [problemType,setProblemType] = useState([])
  const [isLoading,setIsLoading]= useState(false)
  const textAreaRef = useRef('')
  return (
    <div className='Warning-Popup'>
     <div className="warning-box">
       <Warning width={"35px"} color="#fee440"/>
       <div className="list">
	<h2>Report Problem</h2>
    <label>
    	<input type="checkbox" name="" value="download problem" onClick={(e)=>{
        console.log(e.target.value);
        setProblemType(prev =>{
          if(prev.some(d => d === e.target.value)){
            return prev.filter(d => d !== e.target.value)
          }
          return [...prev ,e.target.value]
        })
      }}/>
    	<i></i>
    	<span>download problem</span>
    </label>
     <label>
    	<input type="checkbox" name="" value="video not found" onClick={(e)=>{
        console.log(e.target.value);
        setProblemType(prev =>{
          if(prev.some(d => d === e.target.value)){
            return prev.filter(d => d !== e.target.value)
          }
          return [...prev ,e.target.value]
        })
      }}/>
    	<i></i>
    	<span>video not found</span>
    </label>
     <label>
     <input type="checkbox" name="" value="subtitle not found" onClick={(e)=>{
        console.log(e.target.value);
        setProblemType(prev =>{
          if(prev.some(d => d === e.target.value)){
            return prev.filter(d => d !== e.target.value)
          }
          return [...prev ,e.target.value]
        })
      }}/>
    	<i></i>
    	<span>subtitle not found</span>
    </label>
     <label>
     <input type="checkbox" name="" value="Religious abuse" onClick={(e)=>{
        console.log(e.target.value);
        setProblemType(prev =>{
          if(prev.some(d => d === e.target.value)){
            return prev.filter(d => d !== e.target.value)
          }
          return [...prev ,e.target.value]
        })
      }}/>
    	<i></i>
    	<span>Religious abuse</span>
    </label>
    <label>
    <input type="checkbox" name="" value="others" onClick={(e)=>{
        console.log(e.target.value);
        setProblemType(prev =>{
          if(prev.some(d => d === e.target.value)){
            return prev.filter(d => d !== e.target.value)
          }
          return [...prev ,e.target.value]
        })
      }}/>
    	<i></i>
    	<span>others</span>
    </label>
    </div>
    {problemType.some(d => d === "others")?<textarea ref={textAreaRef} placeholder='write your problem...' />:null}
    <div className="btns-area flex flex-between">
    <button  onClick={()=>{
      setActiveWarning(false)
    }}>exit</button>
    {!isLoading?<button onClick={()=>{
      sendReports(userId,{
        type,
        showName,
        problemType,
        showId,
        userMsg:textAreaRef?.current.value
      },setIsLoading)
      setActiveWarning(false)
    }}>send</button>: <span className="loaderX" >

    </span>}
    
    </div>

     </div>
    </div>
  )
}

export default WarningPopup