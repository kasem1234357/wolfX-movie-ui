import axios from "axios"
import { downloadGenrator } from "./downloadLinkGenerator"

export const getMainDownloadLink = (data,setDt,setLoadingDownload,cb=[],errCb=[])=>{

    axios.post('https://wolfxmovie2.onrender.com/api/movies/check',{...data,name:'_'+data.name.split(' ').join('_')}).then(res =>{
        setDt(res.data)
        cb.length >0 &&cb.forEach(el =>{
            el.callback(...el.arg)
         })
        console.log(res.data);
        setLoadingDownload(false)
       }).catch(err =>{
        errCb.length >0 && errCb.forEach(el =>{
            el.callback(...el.arg)
         })
        console.log(err)
        downloadGenrator(data,setDt,setLoadingDownload)
       })
}