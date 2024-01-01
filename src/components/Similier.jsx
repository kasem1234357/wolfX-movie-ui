import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ScrollBox from './Boxes/ScrollBox/ScrollBox'
import Loading from './custom/Loading';
import {fetchUrl} from '../utils/FetshingUrl'
function Similier({typeId,name}) {
 const [data,setData]=useState([]);
 const [loading,setLoading] = useState(true)
 const [error,setError] = useState(false)
 useEffect(()=>{
  try {
   setLoading(true);
   axios(fetchUrl.similier(typeId,name) ).then((responce) => {
   setData(responce.data.results)
   setLoading(false);
  })
 
  } catch (error) {
   setLoading(false)
   setError(true)
    
  }
},[typeId])
if(loading){
 return <Loading/>
}
if(error){
 return <h1>hello error</h1>
}

  return (
   <>
   <div className='flex flex-between ' style={{paddingTop:'10px'}}>
     <h3 className='text-white'>Recommendations</h3>
     
   </div>
   
   

<ScrollBox style={{ minHeight: "270px",position:'relative'}} data={data} type={'large-movie'}/></>
   
  )
}

export default Similier
