
import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Download = () => {
  const location = useLocation();
  const name = location.state.name
  const type = location.state.type
  const year = location.state.year
  return (
   <>
    <div>
     <iframe width={'100%'} height="100%" title='jjj'  src={`http://dl6.sermovie.xyz/${type}/${year}/${name}/`} frameborder="0"></iframe>
     
    </div>
    
    </>
  )
}

export default Download