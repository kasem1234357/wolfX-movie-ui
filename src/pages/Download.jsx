
import React from 'react'
import { useLocation } from 'react-router-dom'

const Download = () => {
  const location = useLocation();
  const server1 = (n,type,year,name)=>{
    const nameSv1 = type === "Movie"?name.split(" ").join(".")+"."+year:name.split(" ").join(".")
    return `http://dl${n}.sermovie.xyz/${type}/${year}/${nameSv1}/`
  }
  const server3 = (type,year,name)=>{
    const nameSv3 = name.split(" ").join(".")
    const typeSv3 = type === "Movie"?"Movies":"Series"
    return `http://dl4.sermovie.xyz/${typeSv3}/${year}/${nameSv3}/`
  }
  const server2 =(type,year,name)=>{
     const typeSv = type === "Movie"?"Movie":"TVS"
     const nameSv2 = name.split(" ").join("%20")
     return `http://s1.dlcm.xyz/Zone/${typeSv}/${typeSv !== "Movie"?nameSv2:`${year}/${nameSv2}%20${year}%20720p%20x264%20Webrip%20YIFY%20MOViE-ZONE.mp4`}`
  }
  const server4 = (type,year,name)=>{
    const typeSv4 = type === "Movie"?"Movies":"Series"
    const nameSv4 = name.split(" ").join(".")
    return `http://dl5.sermovie.xyz/${typeSv4}/${year}/${nameSv4}/`
  }
  const name = location.state.name
  const type = location.state.type
  const year = location.state.year
  return (
   <>
    <div>
     <h1>direct link 1</h1>
     <a href={server2(type,year,name)} target="_blank" rel="noopener noreferrer"> url 1</a>

     <h1>direct link 2</h1>

     <a href={server1(6,type,year,name)} target="_blank" rel="noopener noreferrer"> url 2-1</a>
     <a href={server1(6,type,parseInt(year)+1,name)} target="_blank" rel="noopener noreferrer"> url 2-2</a>

     <h1>direct link 3</h1>

     <a href={server4(type,parseInt(year)+1,name)} target="_blank" rel="noopener noreferrer"> url 3-2</a>
     <a href={server4(type,year,name)} target="_blank" rel="noopener noreferrer"> url 3-1</a>
     
     <h1>direct link 4</h1>
     <a href={server3(type,year,name)} target="_blank" rel="noopener noreferrer"> url 4</a>
     <h1>direct link 5</h1>
     <a href={server1(4,type,parseInt(year)+1,name)} target="_blank" rel="noopener noreferrer"> url 5</a>
    </div>
    
    </>
  )
}

export default Download
