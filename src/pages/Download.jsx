
import React from 'react'

import { useLocation } from 'react-router-dom'

const Download = () => {
  const location = useLocation();
  const name = location.state.name
  const type = location.state.type
  const year = location.state.year
  return (
   <>
    <div>
     <h1>url 1</h1>
     <a href={`http://dl6.sermovie.xyz/${type}/${year}/${name+(type === "Movie"?year:"")}/`} target="_blank" rel="noopener noreferrer"> url 1</a>
     <h1>url 2</h1>
     <a href={`http://dl6.sermovie.xyz/${type}/${ parseInt(year)+1}/${name+(type === "Movie"?parseInt(year)+1:"")}/`} target="_blank" rel="noopener noreferrer"> url 2</a>
     <h1>url 3</h1>
     <a href={`http://dl6.sermovie.xyz/${type}/${ parseInt(year)-1}/${name+(type === "Movie"?parseInt(year)-1:"")}/`} target="_blank" rel="noopener noreferrer"> url 3</a>
    </div>
    
    </>
  )
}

export default Download
