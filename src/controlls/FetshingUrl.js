export const fetchUrl ={
 search:(name,page,query)=>{
 return (`${process.env.REACT_APP_URL}search/${name}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}&include_adult=true&query=${query}`)
},
explore:(name,page,typeID=null)=>{
  return (
`${process.env.REACT_APP_URL}${name}/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}${typeID?"&primary_release_year="+typeID:""}`)
},
singleMovie:(name,movieId)=>{
 return( `${process.env.REACT_APP_URL}${name}/${movieId}?api_key=${process.env.REACT_APP_KEY}&language=en-US&append_to_response=videos`)
},
actorsInMovie:(name,movieId)=>{
  return( `${process.env.REACT_APP_URL}${name}/${movieId}/credits?api_key=${process.env.REACT_APP_KEY}&language=en-US&append_to_response=videos`)
},
similier:(movieId)=>{
 return(`${process.env.REACT_APP_URL}movie/${movieId}/similar?api_key=${process.env.REACT_APP_KEY}&language=en-US$page=1`)
},
trending:()=>{
  return(`${process.env.REACT_APP_URL}trending/all/week?api_key=${process.env.REACT_APP_KEY}`)
},
rated:()=>{
  return(`${process.env.REACT_APP_URL}movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
},
tvShow:()=>{
  return(`${process.env.REACT_APP_URL}tv/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
},
singleSeason:(tvId,seasonNumber)=>{
  return(`${process.env.REACT_APP_URL}tv/${tvId}/season/${seasonNumber}?api_key=${process.env.REACT_APP_KEY}&language=en-US`)
},
singleEpisode:(tvId,seasonNumber,episodeNumber)=>{ 
  return(`${process.env.REACT_APP_URL}tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/external_ids?api_key=${process.env.REACT_APP_KEY}`)
},
filterMoviesByType:(typeShow,typeId,year=null)=>{
  return(`${process.env.REACT_APP_URL} /discover/${typeShow}?api_key=${process.env.REACT_APP_KEY}&with_genres=${typeId.join("|")}${year?"&primary_release_year="+year:""}&sort_by=vote_average.desc`)
}
}