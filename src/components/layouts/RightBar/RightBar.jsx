import React, { useRef } from 'react'
import FilterBtn from '../../custom/FilterBtn'
// import { data } from '../../dataBase/fakeData';
// import MoviesBox from '../sm-components/MoviesBox'
import { memo } from 'react'
import {Link, useNavigate, } from 'react-router-dom'
import '../../../styles/rightbar.css'
import {useDispatch,useSelector}from 'react-redux'
import {searchUpdate} from '../../../redux/slices/movieSlice'
import search from '../../images/search-svgrepo-com.svg'
import { Close } from '../../icons/svgIcon';
import FilterBox from '../../Boxes/filterBox/FilterBox'
import { useState } from 'react'
import { filterApi } from '../../Boxes/filterBox/FilterApi'
import {filter} from '../../../utils/filterNavigate'
import useDebounce from '../../../hooks/useDebounce'
import usePrevious from '../../../hooks/usePrevious'
const RightBar = memo(({active,setActive}) => {
 
 const logOut = ()=>{
  localStorage.clear()
  window.location.reload();
 }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeFilter,setActiveFilter]=useState(false)
  const [filterID,setFilterID]=useState('')
  const [inputValue,setInputValue]=useState('')
  const user = useSelector(state => state.users.user)
  const status = useSelector(state => state.users.status)
  const url = window.location.pathname.slice(window.location.pathname.lastIndexOf("/")+1)
  const inputRef = useRef("")
  
  
  const handleSearch = ()=>{
    if(window.location.pathname === ('/explore/tv')){
     navigate("explore/tv",{ state: { dataType: 'search' } })
    }else if(window.location.pathname === ('/exploreActors')){
     navigate("exploreActors",{ state: { dataType: 'searchByActor'} })
    }else{
     navigate("explore/movie",{ state: { dataType: 'search'} })
    }
    if(inputValue === ''){
     if(window.location.pathname === ('/explore/tv')){
       navigate("explore/tv",{ state: { dataType: 'explore' } })
       
      }else if(window.location.pathname === ('/exploreActors')){
       navigate("exploreActors",{ state: { dataType: 'exploreActor' } })
      }
     
      else{
        console.log(filterID);
       navigate("explore/movie",{ state: { dataType: 'explore',filter:filterID  } })
      }
    }
    dispatch(searchUpdate(inputValue) )
    ;}
    const  resetInput =()=>{
      if(inputRef){
inputRef.current.value = ''
      }

    }
    useDebounce(handleSearch,400,[inputValue])
    usePrevious(window.location.pathname,{isnotTheSame:resetInput})

  return (
    <div className="flex rightBarContainer">
      {activeFilter?<FilterBox setActive={setActive} setActiveFilter={setActiveFilter}/>:null}
      
       <div className={`flex-box bg-gray navigation flex  hidden scroll-y f-column ${active?'active':''} ${user!==null&&"no-gap"}`} >
      
         <div className="account flex  padding center " >
   
  <div className="account-detials flex center f-column">
    {
      status === 'loading'?<span className='loaderX2'></span>:user!==null? <><Link to='/account' ><span className="imgBox text-white">{user?.userName.substring(0,1)}</span><img className="none imgBox" src="" alt="" /></Link> 
      <div><h3 className="text-white" >Hi👋 {user?.userName}</h3>
        </div>
        </> :<>
        <button className='sign-btn f-column'>
        <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#edf1f5"><path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"/></svg>
        <Link to='/account'>
         <span>Sign up</span>
         </Link> </button>
         </>
    }

  
   
  </div>
 
 
 
 
 <div className="arrow " style={{cursor: 'pointer'}}><Close width={'40px'} onClick={()=>setActive(!active)}/></div></div>
   <div className="filter flex-items padding flow ">
    <div className="pages-box flex flex-between fw-row">
      <div className={`flex-items page-router ${url ==="movie"?"active-page":""}`}><Link to='/explore/movie' onClick={()=>{
        inputRef.current.value = ""
     }}>Movies</Link></div>
      <div className={`flex-items page-router ${url ==="tv"?"active-page":""}`}> <Link to='/explore/tv' onClick={()=>{
        inputRef.current.value = ""
     }}>Shows</Link></div>
      <div className={`flex-items page-router ${url ==="exploreActors"?"active-page":""}`}><Link to='exploreActors' onClick={()=>{
        inputRef.current.value = ""
     }}>Actors</Link></div>
    </div>
    <div className="search bg-dark flex center text-gray">
     <img className="" src={search}alt=""  />
     <input ref={inputRef} className='Search-input' type="search" name="" id="" onInput={(e)=>setInputValue(e.target.value)}/>
    </div>
    <div className="filter-items flex flex-between fw-row text-gray" style={{fontSize:'14px'}}>
     {/* <div className="flex-items box bg-main flex flex-between"><p>horror</p>
     <img className='svg-icon' src={success} alt="" />
     </div> */}
     
     {filterApi.type.slice(0,6).map(({id,name})=>(
       <FilterBtn  active={filterID?.id ===id?true:false} key={id} name={name} onClick={()=>{
         filter({ filterID, idItem:id,active },{setFilterID,dispatch,navigate,setActive})
       }}  />
     ))}
     <FilterBtn name='more-items' style={{flex:'2',}} onClick={()=>setActiveFilter(true)}/>
     
    </div>
    <button className='filter-btn-box flex-items box bg-main fill flex flex-between f-column text-white' style={{outline:'none',border:"none"}} onClick={logOut}>logout</button>
   </div>
   
    </div>
    </div>
   
  )
})

export default RightBar
