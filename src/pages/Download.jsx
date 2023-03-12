
import React from 'react'
import { useLocation } from 'react-router-dom'

const Download = () => {
   const location = useLocation();

  const server1 = (n,type,year,name)=>{
    const nameSv1 = type === "Movie"?name.split(" ").join(".")+"."+year:name.split(" ").join(".")
    return `https://up4cash.com/st?api=222b9419cb010e4f5c5ed2c2c3c61ddde17f3037&url=http://dl${n}.sermovie.xyz/${type}/${year}/${nameSv1}/`
  }
  const server3 = (type,year,name)=>{
    const nameSv3 = name.split(" ").join(".")
    const typeSv3 = type === "Movie"?"Movies":"Series"
    return `https://up4cash.com/st?api=222b9419cb010e4f5c5ed2c2c3c61ddde17f3037&url=http://dl4.sermovie.xyz/${typeSv3}/${year}/${nameSv3}/`
  }
  const server2 =(type,year,name)=>{
     const typeSv = type === "Movie"?"Movie":"TVS"
     const nameSv2 = name.split(" ").join("%20")
     return `https://up4cash.com/st?api=222b9419cb010e4f5c5ed2c2c3c61ddde17f3037&url=http://s1.dlcm.xyz/Zone/${typeSv}/${typeSv !== "Movie"?nameSv2:`${year}/${nameSv2}%20${year}%20720p%20x264%20Webrip%20YIFY%20MOViE-ZONE.mp4`}`
  }
  const server4 = (type,year,name)=>{
    const typeSv4 = type === "Movie"?"Movies":"Series"
    const nameSv4 = name.split(" ").join(".")
    return `https://up4cash.com/st?api=222b9419cb010e4f5c5ed2c2c3c61ddde17f3037&url=http://dl5.sermovie.xyz/${typeSv4}/${year}/${nameSv4}/`
  }
  const server5 = (type,year,name)=>{
    const typeSv5 = type === "Movie"?"Film":"Series"
    const nameSv4 = name.split(" ").join(".")+"."+year
    return `https://up4cash.com/st?api=222b9419cb010e4f5c5ed2c2c3c61ddde17f3037&url=https://dl10.dlseemoon.xyz/${typeSv5}/SoftSub/${year}/${nameSv4}.480p.WEB-DL.RMT.SoftSub.Golchindl.mkv/`
  }
  const name = location.state.name
  const type = location.state.type
  const year = location.state.year
  return (
    <>
    <div>
      <div className="direct-section">
        <div className="download-btn">
          <a href={server2(type,year,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>
      <div className="direct-section">
        <div className="download-btn">
          <a href={server1(6,type,year,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>
      <div className="direct-section">
        <div className="download-btn">
          <a href={server1(6,type,parseInt(year)+1,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>
      <div className="direct-section">
        <div className="download-btn">
          <a href={server4(type,year,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>
     <div className="direct-section">
        <div className="download-btn">
          <a href={server4(type,parseInt(year)+1,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>
      <div className="direct-section">
        <div className="download-btn">
          <a href={server3(type,year,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>
      <div className="direct-section">
        <div className="download-btn">
          <a href={server1(4,type,parseInt(year)+1,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>
      {parseInt(year) < 2023?<div className="direct-section">
        <div className="download-btn">
          <a href={server5(type,year,name)} target="_blank" className="direct-link" rel="noopener noreferrer">download</a>
        </div>
        <div className="q">720p</div>
        <div className="size">--</div>
      </div>:null}
    </div>
    
    </>
  )
}

export default Download
