const addYears = (start)=>{
   const years = [];
   for(let i =2023;i>=start;i--){
    years.push(i)
   }
   return years
}

export const filterApi = {

 years:addYears(1970),
 type:  [
   {
   id: 28,
   name: "Action"
   },
   {
   id: 12,
   name: "Adventure"
   },
   {
      id: 27,
      name: "Horror"
   },
   {
   id: 16,
   name: "Animation"
   },
   {
   id: 35,
   name: "Comedy"
   },
   {
   id: 80,
   name: "Crime"
   },
   {
   id: 99,
   name: "Documentary"
   },
   {
   id: 18,
   name: "Drama"
   },
   {
   id: 10751,
   name: "Family"
   },
   {
   id: 14,
   name: "Fantasy"
   },
   {
   id: 36,
   name: "History"
   },
   
   {
   id: 10402,
   name: "Music"
   },
   {
   id: 9648,
   name: "Mystery"
   },
   {
   id: 10749,
   name: "Romance"
   },
   {
   id: 878,
   name: "Science Fiction"
   },
   {
   id: 10770,
   name: "TV Movie"
   },
   {
   id: 53,
   name: "Thriller"
   },
   {
   id: 10752,
   name: "War"
   },
   {
   id: 37,
   name: "Western"
   }
   ],
 age:['مراقبة الأهل','+13','+16','+18','للكبار فقط'],
 country:[
 {
   id:1,
   name:"عربي"
 },
 {
   id:2,
   name:"امريكي"
 },
 {
   id:3,
   name:"هندي"
 },
 {
   id:4,
   name:"اسباني"
 },
 {
   id:5,
   name:"كوري"
 },
 {
   id:6,
   name:"مصري"
 }
],
 section:[]
}


