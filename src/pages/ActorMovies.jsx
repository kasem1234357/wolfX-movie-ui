import axios from 'axios'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import {fetchUrl} from '../utils/FetshingUrl'
import {  Rating } from '../components/icons/svgIcon'
import {  useSearchParams } from 'react-router-dom'
import MoviesBox from '../components/Boxes/MovieBox/MoviesBox'
import Loading from '../components/custom/Loading'
function ActorMovies() {
    const [ActorDetail,setActorDetail]=useState({})
    const [loading,setLoading]= useState(false)
    const[actorMovies,setActorMovies]=useState([])
    const [page,setPage]= useState(1)
    const [searchParams] = useSearchParams();
    const actorId= searchParams.get("id")
    const actorName = searchParams.get("name")
    const GetActorsDetails =()=>{
     axios(fetchUrl.searchByActor(1,actorName)).then(res =>{
        console.log(res.data.results[0]);
        setActorDetail({...res.data.results[0],totalPages:2})
     })
    }
    const GetActorMovies =(page=1)=>{
        axios(fetchUrl.getActorMovies(page,actorId)).then(res =>{
            page ===1 && setActorDetail(prev => ({...prev,totalPages:res.data.total_pages}))
            console.log(ActorDetail);
            setActorMovies([...actorMovies,...res.data.results])
            setLoading(false)
        })
    }
    useEffect(()=>{
        GetActorsDetails()
        GetActorMovies()
    },[])
   
  return (
    
    <Suspense fallback={<Loading/>}>
        <>
         <div className='actorMovies flex fill fw-row' style={{gap:"20px",position:'relative'}}>
         {ActorDetail?.known_for && 
        <div className="blur-back" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${ActorDetail?.known_for[0].backdrop_path})`}}></div>
         }
     <div className="opacity-front"></div>
       <div className='actor-poster flex-items' style={{maxHeight:'80vh'}}>
       <img alt="" srcSet={`https://image.tmdb.org/t/p/original${ActorDetail?.profile_path
}`} loading="lazy" height={'100%'} width={'100%'} style={{objectFit:'cover'}} />
       </div>
       <div className='details-actor flex-items-2 text-white padding flow'>
       <div class="title flex flex-between text-gray"><h1>{ActorDetail?.name}</h1><div class="rating-box flex center text-gray"><span class="text-gray" style={{fontSize:" 22px", paddingRight: "10px"}}>{ActorDetail?.popularity}</span><span> <Rating style={{width:'22px'}} color={'#ffee03'}/></span></div></div>
       <p style={{margin: "0px"}}>2023</p>
       <p><span>known for department:</span> <span>{ActorDetail?.known_for_department}</span></p>
       </div>
    
   </div>
 
  
  <Suspense fallback={<Loading/>}>
  {ActorDetail?.known_for &&<>
    <h2 className='text-white'>Knowns for </h2>
      <div className='flex  fw-row' style={{justifyContent:'space-around',alignItems:'center'}}>
    {ActorDetail?.known_for.map(boxData=>{
     return <MoviesBox boxStyle={'meduim-movie'} key={boxData.id} data={boxData} type={boxData.media_type}/>
    })}

   </div>
   <h2 className='text-white'>Famous movies for {actorName} </h2>
   <div className='flex  fw-row' style={{justifyContent:'space-around',alignItems:'center'}}>
    {actorMovies?.map(boxData=>{
     return <MoviesBox boxStyle={'small-movie'} key={boxData.id} data={boxData} type={"movie"}/>
    })}

   </div>
   { page < ActorDetail?.totalPages?!loading ?<button className='load-btn' onClick={()=>{
    console.log(ActorDetail?.totalPages);
    
    if(page < ActorDetail?.totalPages){
        setLoading(true)
        GetActorMovies(page+1)
        setPage(prev => prev+1)
    }
      
   }}>Load more</button>:<span className='loaderX2' style={{margin:'auto'}}></span>:<br/>}
   </>
   }
   </Suspense>


    </>

    </Suspense>
  )
}

export default ActorMovies
