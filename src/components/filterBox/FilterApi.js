const addYears = (start)=>{
   const years = [];
   for(let i =start;i<2022;i++){
    years.push(i)
   }
   return years
}

export const filterApi = {
 years:addYears(1970),
 type:['Drama','Horror','Romance','Crime','History','Action','Comedy'],
 age:['مراقبة الأهل','+13','+16','+18','للكبار فقط'],
 section:[]
}
