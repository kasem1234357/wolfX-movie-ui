import axios from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
 const [searchParams] = useSearchParams();
 const [currentServer,setCurrentServer]=useState(3)
 const [currentUrl,setCurrentUrl]= useState("")
 const [activeAnime,setActiveAnime]= useState(false)
 const [activeAr_Tr,setActiveAr_Tr]= useState(false)
 const [animeUrls,setanimeUrls]=useState([])
const idshow = searchParams.get("id")
const server = searchParams.get("server")
const type = searchParams.get("type")
const name = searchParams.get("name")
const epsoide = searchParams.get("epsoide")
const season = searchParams.get("season")
const videoRef = useRef("")
const activeAnimeServer = (name,epsoide)=>{
      try {
       axios.get(`https://api.iwannawatch.cf/garson.php?Name=${name}&status=list`).then(responce =>{
        console.log(responce.data)
        const id = responce.data[epsoide-1]?.ID
        console.log(id);
        axios.get(`https://api.iwannawatch.cf/garson.php?episode=${id}`).then(res => {
         setanimeUrls(res.data)
         setCurrentUrl(res.data[res.data.length - 1].Link)
        })
       })
      } catch (error) {
       
      }
}

const servers = [{
 type:"all",
 url:`${(type === "tv") ||(type === "Anime")?`https://autoembed.to/tv/tmdb/${idshow}-${season}-${epsoide}`:`https://autoembed.to/movie/imdb/${idshow}`}`
},
{
 type:"all",
 url:`${(type === "tv") ||(type === "Anime")?`https://v2.vidsrc.me/embed/${idshow}/${season}-${epsoide}`:`https://v2.vidsrc.me/embed/${idshow}/`}`
},
{
 type:"all",
 url:`${(type === "tv") ||(type === "Anime")?`https://series.databasegdriveplayer.co/player.php?type=series&tmdb=${idshow}&season=${season}&episode=${epsoide}`:`https://databasegdriveplayer.xyz/player.php?imdb=${idshow}`}`
},
]
useEffect(()=>{
 if(server === "4" && type === "Anime"){
  console.log("fff");
  activeAnimeServer(name,epsoide)
  setActiveAnime(true)
  setCurrentServer(4)
 }else{
  setCurrentUrl(servers[parseInt(server) - 1].url)
 }
   
   
},[])
  return (
    <div className='watch-area'>
     <div className="servers flex">
      {servers.map((server,index )=>(
       <div className={`${server.url === currentUrl?"active-server":""}`} key={index} onClick={()=>{
        setCurrentServer(index+1)
        setCurrentUrl(server.url)
       }}>server {index+1}</div>
      ))}
      {activeAnime && <div>server 4</div>}
      {activeAr_Tr && <div>server 5</div>}
      
     </div>
     {!activeAnime || currentServer !== 4?<iframe src={currentUrl} width={100}
        height={100}
        title="youtube"
        style={{ border: "none" }}
        SameSite="None" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>:<><video   src={currentUrl} controls autoplay/></>}
     {activeAnime && <div className='q-btns flex' >
     {animeUrls && animeUrls?.map(an => (
          <div className={`${currentUrl === an.Link?"active-q":""}`} onClick={()=>{
            setCurrentUrl(an.Link)
          }}>{an.Size}p</div>
        ))}
      </div>}
    </div>
  )
}

export default Watch
