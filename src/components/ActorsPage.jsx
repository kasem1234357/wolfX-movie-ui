import React from 'react'
import { useLocation } from 'react-router-dom'
import { fetchUrl } from '../controlls/FetshingUrl'

function ActorsPage() {
    const location = useLocation()
    const dataType = location.state?location.state.dataType:'exploreActor'
    const filter = location.state?location.state.filter:''
    const origin = location.state?location.state.origin:''
    const year = location.state?location.state.years:[]
    const query = useSelector(state => state.movies.querry)
    const [data,setData]=useState([]);
    const[page,setPage]=useState(1)
   const [loading,setLoading]=useState(true); 
   const [update,setUpdate]=useState(true)
   const containerRef=useRef(null)
   
const callbackFunction=(entries)=>{
    const [entry] = entries
    if(entry.isIntersecting ){
      if(update){
       setPage(page +1);
       setUpdate(false)
       fetchData(page+1,data)
      }
    }
   }
   const opt = useMemo(()=>({root:null,
     rootMargin:'0px',
     threshold:0.8}),[])
   
   const fetchData =useCallback( (pageNumber,dataStore) => {
     try {
          axios(fetchUrl[dataType](pageNumber,query,)).then((responce)=>{
           setData([...dataStore,...responce.data.results]);
         setLoading(false)
         setUpdate(true)
          })
        
         
     } catch (error) {
       console.log(error);
     }
    
   },[dataType,name,query,filter])
   useEffect(()=>{
      setData([])
      setPage(1);
      fetchData(1,[]);
      
      
   },[name,query,fetchData]);
   
   useEffect(()=>{
     if(data !== [] && data.length > 10){
     const refContent= containerRef.current
     const observer = new IntersectionObserver(callbackFunction,opt)
      if(refContent) observer.observe(refContent)
      return ()=>{
       if(refContent) observer.unobserve(refContent)
      }}
   },[callbackFunction,opt]);
   // if(loading){
   //   return <Loading/>
   // }
  return (
    <Suspense fallback={<Loading/>}>
    <div className='flex flex-around fw-row' style={{gap:"10px"}}>
     { data?.map((actor)=>(
    <div className='actorBox'>
     <img src={`https://image.tmdb.org/t/p/original${actor?.profile_path} `} alt="" srcset="" />
     {actor.name}</div>
   ))}
   
  <div ref={containerRef}>
  <Loading height={'300px'}  />
  </div>
  
 </div>
 </Suspense>

  )
}

export default ActorsPage
