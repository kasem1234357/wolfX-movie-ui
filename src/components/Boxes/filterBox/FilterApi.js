const addYears = (start)=>{
   const years = [];
   for(let i =new Date().getFullYear();i>=start;i--){
    years.push(i)
   }
   return years
}

export const filterApi = {

 years:addYears(1970),
 type:  [
   {
    id:1,
    tvId: 10768,
   movieId: 28,
   name: "Action"
   },
   {

    id: 2,
    tvId:  10759,
   movieId: 12,
   name: "Adventure"
   },
   {
    id: 3,
    tvId:  9648,
      movieId: 27,
      name: "Horror"
   },
   {
    id: 4,
    tvId: 16,
   movieId: 16,
   name: "Animation"
   },
   {
    id: 5,
    tvId: 35,
   movieId: 35,
   name: "Comedy"
   },
   {
    id: 6,
    tvId: 80,
   movieId: 80,
   name: "Crime"
   },
   {
    id: 7,
    tvId: 99,
   movieId: 99,
   name: "Documentary"
   },
   {
    id: 8,
    tvId: 18,
   movieId: 18,
   name: "Drama"
   },
   {
    id: 9,
    tvId: 10751,
   movieId: 10751,
   name: "Family"
   },
   {
    id: 10,
    tvId:  10765,
   movieId: 14,
   name: "Fantasy"
   },
   {
    id: 11,
    tvId: 99,
   movieId: 36,
   name: "History"
   },
   
   {
    id: 12,
    tvId: 10766,
   movieId: 10402,
   name: "Music"
   },
   {
    id: 13,
    tvId: 9648,
   movieId: 9648,
   name: "Mystery"
   },
   {
    id: 14,
    tvId: 18,
   movieId: 10749,
   name: "Romance"
   },
   {
    id: 15,
    tvId:  10765,
   movieId: 878,
   name: "Science Fiction"
   },
   {
    id: 16,
    tvId: 10767,
   movieId: 10770,
   name: "TV Movie"
   },
   {
    id: 17,
    tvId: 10759,
   movieId: 53,
   name: "Thriller"
   },
   {
    id: 18,
    tvId: 10768,
   movieId: 10752,
   name: "War"
   },
   {
    id: 19,
    tvId: 37,
   movieId: 37,
   name: "Western"
   }
   ],
 age:['مراقبة الأهل','+13','+16','+18','للكبار فقط'],
 country:[
 {
   id:"SY",
   name:"سوري"
 },
 {
   id:"US",
   name:"امريكي"
 },
 {
   id:"IN",
   name:"هندي"
 },
 {
   id:"ES",
   name:"اسباني"
 },
    {
  id:'DE',
  name:'الماني'
 },
 {
   id:"KR",
   name:"كوري"
 },
 {
  id:"JP",
  name:"ياباني"
 },
 {
  id:"IT",
  name:"ايطالي"
 },
 {
   id:"EG",
   name:"مصري"
 },
 {
  id:"TR",
  name:"تركي"
 },
 {
   id:"LB",
   name:"لبناني"
 },
 {
  id:"SR",
  name:"سعودي"
 },
 {
  id:"RU",
  name:"روسي"
 },
 {
  id:"FR",
  name:"فرنسي"
 }
],
 section:[]
}


