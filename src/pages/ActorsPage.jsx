import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams,useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/custom/Loading';
import {fetchUrl} from '../utils/FetshingUrl'
import { useMemo } from 'react';
import { useCallback } from 'react';
import ActorBox from '../components/Boxes/ActorBox/ActorBox';
function ActorsPage() {
  const navigate = useNavigate()
    const location = useLocation()
    const dataType = location.state?location.state.dataType:'exploreActor'
    const filter = location.state?location.state.filter:''
    const origin = location.state?location.state.origin:''
    const year = location.state?location.state.years:[]
    const query = useSelector(state => state.movies.querry)
    const [data,setData]=useState([]);
    const[page,setPage]=useState(1)
   const [loading,setLoading]=useState(true); 
   const [update,setUpdate]=useState(true)
   const containerRef=useRef(null)
   
const callbackFunction=(entries)=>{
    const [entry] = entries
    if(entry.isIntersecting ){
      if(update){
       setPage(page +1);
       setUpdate(false)
       fetchData(page+1,data)
      }
    }
   }
   const opt = useMemo(()=>({root:null,
     rootMargin:'0px',
     threshold:0.8}),[])
   
   const fetchData =useCallback( (pageNumber,dataStore) => {
     try {
          axios(fetchUrl[dataType](pageNumber,query,)).then((responce)=>{
           setData([...dataStore,...responce.data.results]);
         setLoading(false)
         setUpdate(true)
          })
        
         
     } catch (error) {
       console.log(error);
     }
    
   },[dataType,query,filter])
   useEffect(()=>{
      setData([])
      setPage(1);
      fetchData(1,[]);
      
      
   },[query,fetchData]);
   
   useEffect(()=>{
     if(data !== [] && data.length > 10){
     const refContent= containerRef.current
     const observer = new IntersectionObserver(callbackFunction,opt)
      if(refContent) observer.observe(refContent)
      return ()=>{
       if(refContent) observer.unobserve(refContent)
      }}
   },[callbackFunction,opt]);
   // if(loading){
   //   return <Loading/>
   // }
  return (
    <Suspense fallback={<Loading/>}>
    <div className='flex center fw-row' style={{gap:"20px"}}>
     { data?.filter(dt => dt.profile_path).map((actor)=>(
    <ActorBox actor={actor}/>
   ))}
   
  <div ref={containerRef}>
  <Loading height={'300px'}  />
  </div>
  
 </div>
 </Suspense>

  )
}

export default ActorsPage
