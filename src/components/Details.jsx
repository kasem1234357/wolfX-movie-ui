import React, { useEffect, useState } from 'react'
import { Download, Success,Warning } from '../icons/svgIcon'
import {useDispatch,useSelector}from 'react-redux'
import { ToggleMovies } from '../utils/toggleMovies';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import WarningPopup from './WarningPopup';
function Details({data3,target,name}) {
  const [checkData,setCheck]=useState(false)
   const nvigate = useNavigate()
  const user = useSelector(state => state.users.user)
  const [activeWarning,setActiveWarning]=useState(false)
  const movies = useSelector(state =>state.movies.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const year = name ==="movie"?data3?.all.release_date.split("-")[0]:data3?.all.first_air_date.split("-")[0]
  const nameDW = data3.all.name || data3.all.title/*name ==="movie"?data3?.all.original_title.split(" ").join(".")+".":data3?.all.original_name.split(" ").join(".")+"."*/
  const type =name ==="movie"?"Movie":"Series"
  // const ToggleMovies = ()=>{
  //   const check = movies?.some(movie => movie.imdb_id === data3.all.imdb_id)
  //   if(check){
  //     try {
  //       axios.put(`http://localhost:8800/api/users/${user._id}/deleteMovie`,{...data3.all,typeShow:name}).then(() =>{
  //         dispatch(deleteMovies({...data3.all,typeShow:name}))
  //       })
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }else{
  //     try {
  //       axios.put(`http://localhost:8800/api/users/${user._id}/addMovie`,{data:{...data3.all,typeShow:name}}).then((responce) =>{
  //         dispatch(addMovie({...data3.all,typeShow:name}))
  //         setCheck(true)
  //       })
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  
  // }
  useEffect(()=>{
    if(name === "movie"){
      setCheck(movies?.some(mv => mv.imdb_id === data3.all.imdb_id))
    }
     else{
      setCheck(movies?.some(mv => mv.id === data3.all.id))
     }
  },[movies,data3,name])

  return (
    <div>
    {activeWarning?<WarningPopup setActiveWarning={setActiveWarning}/>:null}
    <p style={{lineHeight:'1.7'}}>{data3.all.overview}</p>
    <div className="info-box flow " style={{marginTop:'20px'}}>
      <div className="genre  ">
        <span className='text-gray item-space' >Genre:</span><span>{data3.all.genres.map(genre=>{
          return ` ${genre.name}, `
        })}</span>
      </div>
      <div className="lang">
        <span className='text-gray item-space' >lang:</span><span>{data3.all.original_language}</span>
      </div>
      <div className="lang flex " style={{alignItems:"center"}}>
        <span className='text-gray item-space'>companies:</span><span className='flex flex-between fw-row'>{data3.all.production_companies.map(company=>{
          return(
            <div className="companyBox flex flex-between padding" style={{gap:"10px",padding:"0.5rem 1rem"}}>
              <div className="imgBoxLogo" style={{boxShadow:"0px 0px 16px rgba(0,0,0,0.6)"}} >
                <img src={`https://image.tmdb.org/t/p/original${company?.logo_path} `}alt="" srcset={`https://image.tmdb.org/t/p/original${company?.logo_path} `} loading="lazy"/>
              </div>
              
            </div>
            )
        })}</span>
      </div>
    </div>
    <div className='flex ' style={{alignItems:'center'}} >
      {name === 'tv'?null: <span className='watch ' onClick={()=>{
           nvigate(`/watch?id=${data3.all.imdb_id}&server=3`)
        // target(data3.all.imdb_id)
        
        }} >watch Now</span>}
     <span className='add flex center' style={{marginRight:'7px'}}><Link to="/download" state={{type:type,year:year,name:nameDW
}}>
     <Download width={'15px'}/></Link></span>
      <span 
      onClick={()=>{
        user ?
        ToggleMovies({
          dispatch,
          user,
          data:data3.all,
          setCheck,
          name,
          movies
    }) 
        :navigate("/account")}} className={`add flex center ${!checkData?"":"checked"}`}>{!checkData?"+":<Success color="#fff" width="20px"/>}</span> 
         <span className='add flex center' style={{margin:'7px'}}  >
     <Warning width={'15px'} onClick={()=>{
      setActiveWarning(true)
     }}/></span>
      </div>
    </div>
  )
}

export default Details
