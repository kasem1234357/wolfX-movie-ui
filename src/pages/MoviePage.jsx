import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams} from 'react-router-dom';
import Loading from '../components/custom/Loading';
import {  Rating } from '../components/icons/svgIcon';
import {fetchUrl} from '../utils/FetshingUrl'
import Details from '../components/Details';
import Embeded from '../components/custom/Embeded';
import Similier from '../components/Similier';
import Epsoides from '../components/Epsoides';
import Actors from '../components/Actors';

function MoviePage() {
  const [tab,setTab]= useState(1);
  const [loading,setLoading]=useState(true);
  const [season,setSeason]=useState(1)
 const [data3,setData]=useState({
  all:[],
});
  const [searchParams] = useSearchParams();
const idMovie = searchParams.get("id")
const nameData = searchParams.get("name")
const target =(target)=>{
   window.open(`https://autoembed.to/movie/imdb/${target}?server=1&ss=2`)
   }
const contentLoad =(n)=>{
  const youtubeKey = data3?.all?.videos?.results?.filter(item => item.site ==="YouTube" && item.type === "Trailer")[0]?.key || ''
  switch (n) {
    case 1:
      return <Details data3={data3} target={target} name={name} showId={idMovie}/>

      case 2:
        
        return <Embeded data={data3.all} id={youtubeKey}/>
      case 3:
        return <Actors name={name} id={data3.all.imdb_id || data3.all.id}/>
     case 4:
       return <Details data3={data3} target={target} name={name}/>

    default:
      return 'hello'

  }
}
const typeId = idMovie
const name =  nameData

 useEffect(()=>{
   try {
    setLoading(true)
     axios(fetchUrl.singleMovie(name,typeId)).then((responce)=>{
      setData({all:responce.data})
      
      setLoading(false)

     })
   } catch (error) {
     console.log(error);
   }
     
},[typeId,name])

if(loading){
  return <Loading/>
}
  return (
    <>
    <div className='flex fill fw-row' style={{position:"relative"}}>
    <div className="blur-back" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${data3?.all?.backdrop_path})`}}></div>
      <div className="opacity-front"></div>
     <div className='poster-img flex-items'>
      <img alt="" srcSet={`https://image.tmdb.org/t/p/original${data3?.all?.poster_path}`} loading="lazy"  />
     </div>
     <div className='details-movie flex-items-2 text-white padding flow'>
      <div className="title flex flex-between text-gray">
      <h1>{data3.all.title?data3.all.title:data3.all.name}</h1>
      <div className="rating-box flex center text-gray">
     <span className='text-gray' style={{fontSize:'22px',paddingRight:"10px"}}>{data3.all.vote_average}</span>
     <span> <Rating style={{width:'22px'}} color={'#ffee03'}/>
</span>
      </div>
       
      </div>
      <p style={{margin:0}}>{data3.all.release_date?data3.all.release_date.split('-')[0]:data3.all.first_air_date.split('-')[0]}</p>
      <div className="list-tab flex flex-between" style={{width:"100%"}}>
        <h2 className={`list-item ${tab === 1?'activeTab ':''} `} onClick={(e)=>setTab(1)}>overview</h2>
        <h2 className={`list-item ${tab === 2?'activeTab ':''} `} onClick={(e)=>setTab(2)}>trailer</h2>
        <h2 className={`list-item ${tab === 3?'activeTab ':''} `} onClick={(e)=>setTab(3)}>stars</h2>
      </div>
      {
         contentLoad(tab)
     }
     
     </div>
    </div>
    <div className='flex  fw-row' style={{justifyContent:'center',alignItems:'center'}}>
      
     {data3.all.seasons&&(
       <>
       <div className='select'>
          <select onChange={(e)=>setSeason(parseInt(e.target.value) )}>
            
        { data3.all.seasons.slice(0,data3.all.seasons.length).filter(box =>box.name.includes("Season")).map((box,index)=>{
          return(
            <option key={index} value={index+1} >{box.name}</option>
          )
        })}
       </select>
       </div>
      <Epsoides genres={data3.all.genres} originalLanguage={data3?.all?.original_language} tvId={typeId} name={data3?.all?.name } season={season} imageUrl={data3.all.poster_path}/>
       </>
       
      
     )}
    </div>
     <Similier typeId={typeId} name={name}/>
   </>
  )
}

export default MoviePage
