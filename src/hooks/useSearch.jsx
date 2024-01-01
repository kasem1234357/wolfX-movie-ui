import { useState } from "react"

const useSearch =()=>{
    const [isEmpty,setIsEmpty] = useState(null)
    const [filteredItemNumber,setFilteredItemNumber] = useState(0)
    const [filteredData,setFilteredData]=useState({})
    
    const filterBy =(data,filterMethod,filterText)=>{
         const newData =data.slice(0,data.length).filter((dt) => typeof dt[filterMethod].includes(filterText))
         if(data !== newData){
            setFilteredItemNumber(newData.length);
            setIsEmpty(!(newData.length > 0));
            setFilteredData(newData);
        }
        return newData
    }
    
    
    return{
        isEmpty,
        filteredItemNumber,
        filterBy,
        filteredData
    }
}
export default useSearch