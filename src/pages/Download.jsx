

import React, {  useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
import Loading from '../components/custom/Loading';
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { getMainDownloadLink } from '../utils/getMainDownloadLink';
const checkRange = (name) => { 
  switch (true) {
    case name[0].toLowerCase().charCodeAt() >= 97 &&
      name[0].toLowerCase().charCodeAt() <= 102:
      return "A_F";
    case name[0].toLowerCase().charCodeAt() > 102 &&
      name[0].toLowerCase().charCodeAt() <= 108:
      return "G_L";
    case name[0].toLowerCase().charCodeAt() > 108 &&
      name[0].toLowerCase().charCodeAt() <= 114:
      return "M_R";
    case name[0].toLowerCase().charCodeAt() > 114 &&
      name[0].toLowerCase().charCodeAt() <= 122:
      return "S_Z";
    default:
      return "other";
      break;
  }
};
const Download = () => {
   const [loading,setLoading] = useState(true)
   const [downloadLoading,setDownloadLoading] = useState(false)
   const [generator,setGenerator]= useState(false)
   const [searchParams] = useSearchParams();
    const [dt,setDt]=useState([]);
   const name = searchParams.get("name")
   //getMainDownloadLink
  console.log(name);
  const type = searchParams.get("type")
  const year = searchParams.get("year")
  const month = searchParams.get("month")
  const downloadFile2 = (url) => {
    // Create a new anchor element
    const a = document.createElement('a');
    a.href = url;
    
    // Set the download attribute with the desired filename
    a.download = name;

    // Append the anchor to the body
    document.body.appendChild(a);

    // Simulate a click on the anchor
    a.click();

    // Remove the anchor after triggering the download
    document.body.removeChild(a);
    setDownloadLoading(false);
  };
  const  downloadFunc =(url)=>{
    setDownloadLoading(true)
    //https://ak.sv/download/162087/9708/darkness-of-man
    if(url.indexOf("ak.sv") !== -1 ){
       axios.get(`https://download-movie-url-generator.onrender.com/server1/download?url=${url}`).then(res=>{
     setDownloadLoading(false)
  window.open( 
              res.data, "_blank");
})
    }
  else{
     downloadFile2(url)
  }
}

  useEffect(()=>{
    getMainDownloadLink(
     { name: name, year, month, range: checkRange(name) },
     setDt,
          setLoading,
          setGenerator,
    )
  },[])
  //  useEffect(()=>{
  //    axios.post('http://localhost:8800/get-links',{
  //     name:name,
  //     year:year
  //    }).then(res =>{
  //     setDt(res.data)
  //     console.log(res.data);
  //     setLoading(false)
  //    }).catch(err =>{
  //     console.log(err)
  //     setLoading(false);
  //    })
  //  },[name,year,type])
  return (
    <>
     <Helmet>
        <title>
        {name}
        </title>
      </Helmet>
   { !loading?
    <div>
      {dt.length == 0 ?<div  style={{height:'min-content',background:'#353b41',padding:'20px 10px',textAlign:'center',color:'#fff'}}><h1>no url found sorry</h1></div> :dt?.map(el =>(
       <div className="direct-section">
       <div className="download-btn" onClick={()=>{
         if(!downloadLoading){
           downloadFunc(el.url)
         }
       }}>
         <p className="direct-link" >{downloadLoading?<span className="loaderDownload"></span>:"download"}</p>
       </div>
       <div className="q">{el.res}</div>
       <div className="q">{el.q || 'WEBDL'}</div>
     </div>
      ))}
    
    
  </div>:<>{generator?<div  style={{height:'min-content',background:'#353b41',padding:'20px 10px'}}><p style={{color:'#fff',textAlign:'center'}}>main url not found we are trying to generate alternative url this operation will take some time</p></div>:""}<Loading/></>
}
    
    
    
    </>
  )
}

export default Download






