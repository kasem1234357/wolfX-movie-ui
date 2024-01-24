import axios from "axios";
 const addLinkToDB = (data)=>{
    axios.post('https://wolfxmovie2.onrender.com/api/movies/add',{...data,name:'_'+data.name.split(' ').join('_')})
 }
export const downloadGenrator = (data,setDt,setLoadingDownload,navigate,navigateData,cb)=>{
    const {name,year} = data
    axios.post('https://download-url-generator.onrender.com/get-links',{
        name,
        year
       }).then(res =>{
        setDt(res.data)
        console.log(res.data);
        setLoadingDownload(false)
        cb.length >0 &&cb.forEach(el =>{
          el.callback(...el.arg)
       })
       navigate('/download',{state:{...navigateData,dt:res.data}})
        if(res.data?.length > 0){
          addLinkToDB({...data,data:res.data})
        }
         
       }).catch(err =>{
        console.log(err)
        setLoadingDownload(false);
       })
}