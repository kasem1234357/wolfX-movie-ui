export const fetchUrl ={
 search:(name,page,query)=>{
 return (`${process.env.REACT_APP_URL}search/${name}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`)
},
getActorMovies:(page,actorId)=>{
   return `${process.env.REACT_APP_URL}/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&with_people=${actorId}`
  //https://api.themoviedb.org/3/discover/movie?api_key=805e1c9c1b674a304211c1e10080e5f2&language=en-US&sort_by=release_date.desc&page=1&with_people=6193&language=en-US&append_to_response=combined_credits
},
exploreActor:(page)=>{
    
  return `${process.env.REACT_APP_URL}/trending/person/week?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}&include_adult=false`
},
searchByActor:(page,query)=>{
  return `${process.env.REACT_APP_URL}search/person?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`;
  //https://api.themoviedb.org/3/search/person?api_key=805e1c9c1b674a304211c1e10080e5f2&language=en-US&page=1&include_adult=false&query=Emma
},
explore:(name,page,query,year=null,genresId=null,origin)=>{
  return (
`${process.env.REACT_APP_URL}${name}/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}${year?"&primary_release_year="+year:""}&with_genres=${genresId}`)
},
singleMovie:(name,movieId)=>{
 return( `${process.env.REACT_APP_URL}${name}/${movieId}?api_key=${process.env.REACT_APP_KEY}&language=en-US&append_to_response=videos`)
},
actorsInMovie:(name,movieId)=>{
  return( `${process.env.REACT_APP_URL}${name}/${movieId}/credits?api_key=${process.env.REACT_APP_KEY}&language=en-US&append_to_response=videos`)
},
similier:(Id,name)=>{
 return(`${process.env.REACT_APP_URL}${name}/${Id}/recommendations?api_key=${process.env.REACT_APP_KEY}&language=en-US$page=1`)
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
filtershowsByType:(typeShow,page,query,year=[],typeId,origin ="")=>{
  console.log(year,typeId);
  if(typeShow ==="movie"){
    return(`${process.env.REACT_APP_URL}${typeShow}/popular?api_key=${process.env.REACT_APP_KEY}&page=${page}&${typeShow !== 'tv'?"with_genres="+typeId.join("|"):""}${year !== []?"&primary_release_year="+year.join("|"):""}&sort_by=vote_average.desc${origin !==""?`&with_origin_country=${origin.join("|")}`:""}`)
  }
  return(`${process.env.REACT_APP_URL}discover/tv?api_key=${process.env.REACT_APP_KEY}&page=${page}&with_genres=${typeId}${year !== []?"&primary_release_year="+year.join("|"):""}&sort_by=vote_average.desc${origin !==""?`&with_origin_country=${origin.join("|")}`:""}`)
}
}
