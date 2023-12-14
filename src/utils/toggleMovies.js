import {addMovie, deleteMovies} from '../utils/movies'

import axios from 'axios'
import { handleClick } from './notificationConfig'

export const ToggleMovies = ({user,data,dispatch,setCheck,name,movies,setLoading})=>{
  setLoading(true)
 let check = false
  if(name === "movie"){
     check = movies?.some(movie => movie.imdb_id === data.imdb_id)
  }else{
    check = movies?.some(movie => movie.id === data.id)
  }
 if(check){
   try {
     axios.put(`https://wolfxmovie2.onrender.com/api/users/${user._id}/deleteMovie`,{movieId : data.id}).then(() =>{
       dispatch(deleteMovies({...data,typeShow:name}))
       handleClick({type:"warning",msg:"deleting movie from faviorate"})
       setLoading(false)
     })
     
   } catch (error) {
    handleClick({type:"error",msg:"some thing going wrong"})
     console.error(error)
     setLoading(false)
   }
 }else{
   try {
     axios.put(`https://wolfxmovie2.onrender.com/api/users/${user._id}/addMovie`,{data:{...data,typeShow:name}}).then((responce) =>{
       dispatch(addMovie({...data,typeShow:name}))
       handleClick({type:"success",msg:"movie added successifly"})
       setLoading(false)
     })
     setCheck(true)
   } catch (error) {
    handleClick({type:"error",msg:"some thing going wrong"})
     console.error(error)
     setCheck(true)
     setLoading(false)
   } 
 }

}
