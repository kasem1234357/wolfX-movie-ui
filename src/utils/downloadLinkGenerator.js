import axios from "axios";
 const addLinkToDB = (data)=>{
    axios.post('https://wolfxmovie2.onrender.com/api/movies/add',{...data,name:'_'+data.name.split(' ').join('_')})
 }
export const downloadGenrator = (data,setDt,setLoadingDownload,setGenerator,cb)=>{
    const {name,year} = data
    setGenerator(true)
    axios.get(`https://download-url-generator.onrender.com/server1?title=${name}&year=${year}`).then(res =>{
        setDt(res.data)
        console.log(res.data);
        setLoadingDownload(false)
        setGenerator(false)
        cb.length >0 &&cb.forEach(el =>{
          el.callback(...el.arg)
       })
        if(res.data?.length > 0){
          addLinkToDB({...data,data:res.data})
        }
         
       }).catch(err =>{
        console.log(err)
        setGenerator(false)
        setLoadingDownload(false);
       })
}
