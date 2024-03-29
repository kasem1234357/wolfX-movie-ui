import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams,useLocation } from 'react-router-dom';
import Loading from './custom/Loading';
import {fetchUrl} from '../utils/FetshingUrl'
import { useMemo } from 'react';
import { useCallback } from 'react';
import { lazy } from 'react';
import { Helmet } from 'react-helmet';
const MoviesBox = lazy(()=> import("./Boxes/MovieBox/MoviesBox"))
function Explore() {
  const location = useLocation()
  const dataType = location.state?location.state.dataType:'explore'
  const filter = location.state?location.state.filter:''
  const origin = location.state?location.state.origin:''
  const year = location.state?location.state.years:[]
  let {name}=useParams()
 const [data,setData]=useState([]);
 const[page,setPage]=useState(1)
const [loading,setLoading]=useState(true); 
const [update,setUpdate]=useState(true)
const containerRef=useRef(null)
const query = useSelector(state => state.movies.querry)

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
       axios(fetchUrl[dataType](name,pageNumber,query,year,filter,origin)).then((responce)=>{
        setData([...dataStore,...responce.data.results]);
      setLoading(false)
      setUpdate(true)
       })
     
      
  } catch (error) {
    console.log(error);
  }
 
},[dataType,name,query,filter])
useEffect(()=>{
  console.log(filter);
   setData([])
   setPage(1);
   fetchData(1,[]);
   
   
},[name,query,fetchData,filter]);

useEffect(()=>{
  if(data !== [] && data.length > 10){
  const refContent= containerRef.current
  const observer = new IntersectionObserver(callbackFunction,opt)
   if(refContent) observer.observe(refContent)
   return ()=>{
    if(refContent) observer.unobserve(refContent)
   }}
},[callbackFunction,opt]);

  return (
    <>
    <Helmet>
        <title>
        midnightX app
        </title>
        <meta name="description" content="explore the newest movies and tv shows "/>
        <meta name='keywords' content={`movie, film, watch online, download, HD movies, new releases, cinematic experience, movie streaming, entertainment,`} />
      </Helmet>
    <Suspense fallback={<Loading/>}>
       <div className='flex  fw-row' style={{justifyContent:'space-around',alignItems:'center'}}>
     {data.map(boxData=>{
      return <MoviesBox boxStyle={'small-movie'} key={boxData.id} data={boxData} type={name}/>
     })}
     <div ref={containerRef}>
     <Loading height={'300px'}  />
     </div>
     
    </div>
    </Suspense>
    </>
  )
}

export default Explore
