import React from 'react'

function MobileFilterItem({setFilterData,filterData,activeFilter}) {
  return (
   <>
   {activeFilter?filterData.type.map(({name,id})=>(
      <div className='flex  mobile-filter-item' onClick={()=>{
        setFilterData((prev)=>{
            return {...prev,type:prev.type.filter(data => data.id !== id)}})
      }}>{name}</div>
     )):""}
     {activeFilter?filterData.country.map(({name,id})=>(
      <div className='flex  mobile-filter-item' onClick={()=>{
        setFilterData((prev)=>{
            return {...prev,country:prev.country.filter(data => data.id !== id)}})
      }}>{name}</div>
     )):""}
       {activeFilter?filterData.year.map((year)=>(
      <div className='flex  mobile-filter-item' onClick={()=>{
        setFilterData((prev)=>{
            return {...prev,year:prev.year.filter(data => data !== year)}})
      }}>{year}</div>
     )):""}
     {activeFilter?filterData.age.map((age)=>(
      <div className='flex  mobile-filter-item' onClick={()=>{
        setFilterData((prev)=>{
            return {...prev,age:prev.age.filter(data => data !== age)}})
      }}>{age}</div>
     )):""}
   </>
  )
}

export default MobileFilterItem
