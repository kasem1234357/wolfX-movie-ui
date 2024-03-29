import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {fetchUrl} from '../utils/FetshingUrl'
import Loading from './custom/Loading'
import EpsoideBox from './Boxes/EpsoideBox/EpsoideBox'
function Epsoides({tvId,season,imageUrl,genres,originalLanguage,name}) {
 const [data,setData]=useState([])
 const [loading,setLoading]=useState(true)
 const dateNow = (new Date().getTime())
 useEffect(()=>{
  try {
   setLoading(true)
      axios(fetchUrl.singleSeason(tvId,season)).then(responce =>{
       setData(responce.data)
      setLoading(false)
     })
  } catch (error) {
    console.log(error);
  }

 },[tvId,season])
 if(loading) return <Loading/>
 else{
  return (
   <div className='flex  fw-row' style={{justifyContent:'space-around',alignItems:'center'}}>
   {data.episodes.map(boxData=>{
    if(dateNow >(new Date(boxData.air_date).getTime())){
      return <EpsoideBox boxStyle={'small-movie'} key={boxData.id} data={boxData} tvId={tvId} season={season} imageUrl={imageUrl} genres={genres}originalLanguage={originalLanguage} name={name}/>
    }
    return null
  })} 

 </div> 
)
 }
  
}

export default Epsoides
