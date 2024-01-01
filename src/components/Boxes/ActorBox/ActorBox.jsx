import React from 'react'
import { useNavigate } from 'react-router-dom'

function ActorBox({actor}) {
    const navigate = useNavigate()
    const exploreActor = ()=>
    {
        navigate(`/exploreActors/actor?id=${actor.id}&name=${actor.original_name}`)
    }
  return (
    <div className='actorBox' onClick={exploreActor}>
       <img src={`https://image.tmdb.org/t/p/original${actor?.profile_path} `} alt="" srcset="" />
       {actor.name}</div>
  )
}

export default ActorBox
