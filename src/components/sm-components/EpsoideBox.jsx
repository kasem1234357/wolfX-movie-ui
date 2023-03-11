
import { useNavigate } from 'react-router-dom'
import { Download, Rating } from '../../icons/svgIcon'
function MoviesBox({boxStyle,data,imageUrl,tvId,season,genres,originalLanguage,name}) {
  const nvigate = useNavigate()
  // const target =()=>{
  //   window.open(`https://autoembed.to/tv/tmdb/${tvId}-${season}-${data.episode_number}`)
  //   }
  return (
   <div   className={`flex-items bg-main movie-box ${boxStyle} `} 
    style={{margin:'6px',minHeight:'250px'}}>
   <div className="content-box flex f-column" style={{minHeight:'250px'}}>
   <div className="rating flex">
       <div className="rating-box flex center">
       <span> <Rating color={'#ffee03'}/>
</span><span>{parseInt(data.vote_average).toFixed(1)}</span>
       </div>
      
     </div>
     <div className="controll flex  flex-between text-white">
       <div className="info flow ">
         <h2>Epsoide {data.episode_number}</h2>
         <div onClick={()=>{
          if(originalLanguage === "ja" && genres.some(genre =>genre.name === "Animation")){
            
            nvigate(`/watch?type=Anime&epsoide=${data.episode_number}&season=${season}&id=${tvId}&server=4&name=${name}`)
          }else{
            nvigate(`/watch?type=tv&epsoide=${data.episode_number}&season=${season}&id=${tvId}&server=3`)
          }
             
         }}  className='watch   text-white'>watch Now</div>
       
         
       </div>
       <div className='flex center' ><span  className='add flex center'><Download width={'15px'}/></span></div>
       
     </div>
   </div>
   <img src={`https://image.tmdb.org/t/p/original${ data.still_path ||imageUrl }`} alt="" srcSet="" />
 </div>
  )
}

export default MoviesBox
