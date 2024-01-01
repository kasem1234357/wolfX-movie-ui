import React from 'react'
import { useNavigate } from 'react-router-dom'

function FilterSelect({setCurrentSelect,filterApi,filterData,setActiveFilter,activeFilter,setFilterData}) {
    const navigate = useNavigate();
  return (
    <div className={`advanced-filter-mobile ${activeFilter?"active-mobile-filter":""}`}>
    <div className='select-area' data-placeholder="type"   name="type" id="" value={""} onClick={()=>setCurrentSelect("country")}> country
    
    <div className={`select-items-box ${currentSelect === "country"?"active-select":""}`}>
    {filterApi.country.map(({id,name})=>(
            <div value={id} onClick={()=>{
               filterData.country.some(data => data.id === id)?setFilterData((prev)=>{
                  return {...prev,country:prev.country.filter(data => data.id !== id)}}): setFilterData((prev)=>{
                   return {...prev,country:[...prev.country,{id,name}]}})
                  
               
            }}>{name}</div>
         ))}
    </div>
       
        </div>
        <div className='select-area' data-placeholder="type"   name="type" id="" value={""} onClick={()=>setCurrentSelect("type")}> type
    
    <div className={`select-items-box ${currentSelect === "type"?"active-select":""}`}>
    {filterApi.type.map(({id,name})=>(
            <div value={id} onClick={()=>{
               filterData.type.some(data => data.id === id)?setFilterData((prev)=>{
                  return {...prev,type:prev.type.filter(data => data.id !== id)}}): setFilterData((prev)=>{
                   return {...prev,type:[...prev.type,{id,name}]}})
                  
               
            }}>{name}</div>
         ))}
    </div>
       
        </div>
        <div className='select-area' data-placeholder="type"   name="type" id="" value={""} onClick={()=>setCurrentSelect("age")}> Age
    
    <div className={`select-items-box ${currentSelect === "age"?"active-select":""}`}>
    {filterApi.age.map((age,index)=>(
            <div key={index} onClick={()=>{
                filterData.age.some(data => data === age)?setFilterData((prev)=>{
                   return {...prev,age:prev.age.filter(data => data !== age)}}): setFilterData((prev)=>{
                    return {...prev,age:[...prev.age,age]}})
                   
                
             }}>{age}</div>
         ))}
    </div>
       
        </div>
        <div className='select-area' data-placeholder="type"   name="type" id="" value={""} onClick={()=>setCurrentSelect("year")}> years
    
    <div className={`select-items-box ${currentSelect === "year"?"active-select":""}`}>
    {filterApi.years.map((year)=>(
            <div  onClick={()=>{
                filterData.year.some(data => data === year)?setFilterData((prev)=>{
                   return {...prev,year:prev.year.filter(data => data !== year)}}): setFilterData((prev)=>{
                    return {...prev,year:[...prev.year,year]}})
                   
                
             }}>{year}</div>
         ))}
    </div>
       
        </div>
         <div className="btns-area flex ">
    <button onClick={()=>{
        setActiveFilter(false)
    }}>exit</button>
    </div>
    <div className="btns-area flex ">

    <button onClick={()=>{
        if(activeFilter){
            if(window.location.pathname === ('/explore/tv')){
                navigate("explore/tv",{ state: { dataType: 'filtershowsByType',years:filterData.year,filter:[...filterData.type.map(d =>d.id)],origin:[...filterData.country.map(d =>d.id)] } })
               }else{
                navigate("explore/movie",{ state: { dataType: 'filtershowsByType',years:filterData.year,filter:[...filterData.type.map(d =>d.id)],origin:[...filterData.country.map(d =>d.id)] } })
               }
        }
        setActiveFilter(false)
    }}>filter</button>
    </div>
    </div>
  )
}

export default FilterSelect
