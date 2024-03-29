import React, { useEffect, useState } from 'react'
import horror from "../icons/horror.svg"
import comedy from "../icons/comedy.png"
import Animition from "../icons/Animtion.svg"
import crime from "../icons/crime.svg"
import Adventure from '../icons/adventure.svg'
import action from "../icons/action.svg"

function FilterBtn(props) {

  const icons = {
    Horror:horror,
    Comedy:comedy,
    Animation:Animition,
    Crime:crime,
    Adventure:Adventure,
    Action:action
  }
  return (
   <div  {...props} className={`filter-btn-box flex-items box ${props.active ===true?"filter-btn-active":"bg-dark"} flex flex-between f-column`} >
   {/* {props.active === "true"?<Success width="20px"/>:<Plus/>} */}
   <img src={icons[props.name]} alt="" srcset="" className='filter-btn-img' />
   <p>{props.name}</p>
   </div>
  )
}

export default FilterBtn
/*
onClick={()=>{
        const updatedId = filterID ===id?"":id
        setFilterID((prev)=>prev === id?"":id)
        dispatch(searchUpdate("") )
       if(window.location.pathname === ('/explore/tv')){
          navigate("explore/tv",{ state: { dataType: 'filtershowsByType',filter:updatedId  } })
          
         }else{
          navigate("explore/movie",{ state: { dataType: 'explore',filter:updatedId  } })
         }
         setActive(!active)
       }}
       */