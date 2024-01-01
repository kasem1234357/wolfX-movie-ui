import React, { memo } from 'react'
import search from '../../images/search-svgrepo-com.svg'
import { Link,  Outlet, useNavigate,  } from 'react-router-dom';
import { Apps, BookMark, Filter,Notifications } from '../../icons/svgIcon';
import {searchUpdate} from '../../../redux/slices/movieSlice'
import { filterApi } from '../../Boxes/filterBox/FilterApi'
import {useDispatch}from 'react-redux'
import './feed.css'
import { useState } from 'react';
import { useRef } from 'react';
import MobileFilterItem from '../../custom/MobileFilterItem';
import FilterSelect from '../../custom/FilterSelect';
const Feed =memo(({active,setActive}) => {
   const[activeSearch,setActiveSearch]=useState(false)
   const[activeFilter,setActiveFilter]=useState(false)
   const[currentSelect,setCurrentSelect]=useState("");
   const[filterData,setFilterData]= useState({
      type:[],
      year:[],
      age:[],
      country:[]
   })
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const inputRef = useRef("")
   const url = window.location.pathname.slice(window.location.pathname.lastIndexOf("/")+1)
  // setactive function to open and close  rightbar


  return (
    <div className="flex-box-3 bg-dark grid feed hidden-x feed-box">
        <nav className="flex flex-between feed-nav f-column" >
         <div className={"flex flex-between nav-box"} style={{width:"100%"}}>
         <div>
                 <ul className="flex primary-navigation " style={{gap:"10px"}}>
                  {/* <Link to='' className="text-white "><Home width={'20px'}/></Link> */}
                  <Link to='' className="text-white "><span className='logo-tm'> 12</span>{!activeSearch&&":00"}<span className='logo-dt'>pm</span></Link>
                  <div className={`mobile-search bg-dark center text-gray ${activeSearch&&"active-search"}`}>
     <img className="" src={search}alt="" onClick={()=>{setActiveSearch(!activeSearch)
     inputRef.current.value=""
    }} />
     <input ref={inputRef} className={`Search-input`} type="search" name="" id="" onInput={(e)=>{
       if(window.location.pathname === ('/explore/tv')){
        navigate("explore/tv",{ state: { dataType: 'search' } })
       }else{
        navigate("explore/movie",{ state: { dataType: 'search'} })
       }
       if(e.target.value === ''){
        navigate(window.location.pathname,{ state: { dataType: 'explore',filter:"" } })
       }
       dispatch(searchUpdate(e.target.value) )
       ;}}/>
       <div className="mobile-filter-icon" onClick={()=>{
        setActiveFilter(!activeFilter)
      setCurrentSelect("")}}><Filter width="20px" color="#DEE2E6"/></div>
       
    </div>
                 </ul>
             </div>
{/*============= url to the the another pages============================*/ }
             <div>
                 <ul className="flex primary-navigation">
                  {!activeSearch&&<> <Link to='notification' className="svg-icon">
                    <Notifications width={'20px'} />
                 </Link>
                 <Link to='fav' className="svg-icon">
                    <BookMark/>
                 </Link></>}
                
                 <li id="nav-block" className="svg-icon" onClick={()=>setActive(!active)}>
                    <Apps />
                 </li>
                 </ul>
             </div>
  
         </div>
         <div className={`pages-box mobile-filter flex  fw-row ${activeFilter?"filter-hight":""}`}  >
     {(!activeFilter || url ==="movie")?<div className={`flex  mobile-filter-item ${url ==="movie"&&"active-page"}`}><Link onClick={()=>{
        inputRef.current.value = ""
     }} to='/explore/movie'>Movies</Link></div>:""}

     {(!activeFilter || url ==="tv")?<div className={`flex  mobile-filter-item ${url ==="tv"&&"active-page"}`}><Link to='/explore/tv' onClick={()=>{
        inputRef.current.value = ""
     }}>Shows</Link></div>:""}

     {(!activeFilter )?<div className={`flex  mobile-filter-item ${url ==="Actors"&&"active-page"}`}>Actors</div>:""}
     {/*================================================*/}
     <MobileFilterItem activeFilter={activeFilter} filterData={filterData} setFilterData={setFilterData}/>

     {/*================================================*/}
     
    </div>
    <FilterSelect filterApi={filterApi} filterData={filterData} setActiveFilter={setActiveFilter} setCurrentSelect={setCurrentSelect} activeFilter={activeFilter} setFilterData={setFilterData}/>
{/*============= url to the the mian pages==============================*/ }
          
        </nav>
   <Outlet/>
  </div>
  )
})

export default Feed
