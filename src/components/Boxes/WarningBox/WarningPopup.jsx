import React, { useRef } from 'react'
import { useState } from 'react'
import { Warning } from '../../icons/svgIcon'
import { sendReports } from '../../../utils/sendReports'
import useMultiSelect from '../../../hooks/useMultiSelect'
import { useSelector } from 'react-redux'
import { handleClick } from '../../../configs/notificationConfig'
const WarningPopup = ({setActiveWarning,userId,type,showName,showId}) => {
  const [items,setItems]= useState([
    {
      title:'download problem',
      value:'download problem'
    },
    {
      title:'video not found',
      value:'video not found'
    },
    {
      title:"subtitle not found",
      value:"subtitle not found"
    },
    {
      title:'Religious abuse',
      value:'Religious abuse'
    },
    {
      title:'others',
      value:'others'
    },
  ])
  const [isLoading,setIsLoading]= useState(false)
  const verified = useSelector(state => state?.users?.user?.verified)|| false
  const textAreaRef = useRef('')
  const {addItem,removeItem,selectors,searchForItem} = useMultiSelect()
  return (
    <div className='Warning-Popup'>
     <div className="warning-box">
       <Warning width={"35px"} color="#fee440"/>
       <div className="list">
	<h2>Report Problem</h2>
    {items.map((item, index )=>(
      <label>
    	<input type="checkbox" name="" value={item.value} onClick={(e)=>{
        searchForItem(e.target.value) < 0 ?
        addItem(e.target.value):
        removeItem(e.target.value)
        // setProblemType(prev =>{
        //   if(prev.some(d => d === e.target.value)){
        //     return prev.filter(d => d !== e.target.value)
        //   }
        //   return [...prev ,e.target.value]
        // })
      }}/>
    	<i></i>
    	<span>{item.title}</span>
    </label>
    ))}
    </div>
    {searchForItem('others')>=0?<textarea ref={textAreaRef} placeholder='write your problem...' />:null}
    <div className="btns-area flex flex-between">
    <button  onClick={()=>{
      setActiveWarning(false)
    }}>exit</button>
    {!isLoading?<button onClick={()=>{
      if(verified){
        sendReports(userId,{
          type,
          showName,
          problemType:selectors,
          showId,
          userMsg:textAreaRef?.current?.value || ""
        },setIsLoading)
        handleClick({type:"success",msg:"your report send successfily"})
      }else{
        handleClick({type:"error",msg:"you are not verified"})
      }
      setActiveWarning(false)
    }}>send</button>: <span className="loaderX" >

    </span>}
    
    </div>

     </div>
    </div>
  )
}

export default WarningPopup
