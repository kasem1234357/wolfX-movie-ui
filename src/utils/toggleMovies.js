import {addMovie, deleteMovies} from '../utils/movies'

import axios from 'axios'

export const ToggleMovies = ({user,data,dispatch,setCheck,name,movies})=>{
 let check = false
  if(name === "movie"){
     check = movies?.some(movie => movie.imdb_id === data.imdb_id)
  }else{
    check = movies?.some(movie => movie.id === data.id)
  }
 if(check){
   try {
     axios.put(`https://wolfx-movie.onrender.com/api/users/${user._id}/deleteMovie`,{...data.all,typeShow:name}).then(() =>{
       dispatch(deleteMovies({...data,typeShow:name}))
     })
   } catch (error) {
     console.error(error)
   }
 }else{
   try {
     axios.put(`https://wolfx-movie.onrender.com/api/users/${user._id}/addMovie`,{data:{...data,typeShow:name}}).then((responce) =>{
       dispatch(addMovie({...data,typeShow:name}))
       setCheck(true)
     })
   } catch (error) {
     console.error(error)
   }
 }

}
