import React from 'react'
import { useSelector } from 'react-redux'
import MoviesBox from '../components/Boxes/MovieBox/MoviesBox'

function Faviorate() {
 
  const data =useSelector(state => state.movies.data)
 return (
  <div className='flex  fw-row' style={{justifyContent:'space-around',alignItems:'center'}}>
   {data?.map(boxData=>{
    return <MoviesBox boxStyle={'small-movie'} key={boxData.id} data={boxData} type={boxData.typeShow} />
   })}
  </div>
)
}

export default Faviorate