import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchUrl } from '../utils/FetshingUrl'
import { useNavigate } from 'react-router-dom'
import ActorBox from './Boxes/ActorBox/ActorBox'

const Actors = ({name,id}) => {
  const navigate = useNavigate()
 const[data,setData]=useState([])
 useEffect(()=>{
     axios.get(fetchUrl.actorsInMovie(name,id)).then((responce)=>{
      setData(responce.data.cast.slice(0,8))
     }).catch(err =>{console.log(err)})

 },[name,id])
  return (
   <div className='flex center fw-row' style={{gap:"10px"}}  >
     { data?.map((actor)=>(
    <ActorBox  actor={actor}/>
   ))}
   </div>
  
    
  )
}

export default Actors
