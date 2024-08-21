import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
 
function AI() {
   const [result,setResult]=useState([])
    const divRef = useRef((''))
    useEffect(()=>{
      if(divRef){
        divRef.current.focus()
      }
    },[])
      const test = ()=>{
        console.log(divRef.current.textContent)
        axios.post('https://wolfxmovie2.onrender.com/api/ai',{text:divRef.current.textContent},{
            timeout:60000
        }).then(res=>{
          const t =res.data.text
          console.log(t.substring(t.indexOf('['),t.indexOf(']')+1))
         console.log(typeof(t.substring(t.indexOf('['),t.indexOf(']')+1)))
          const final =eval(t.substring(t.indexOf('['),t.indexOf(']')+1))
          setResult(final)
            // convertTextToArray(res.data.text)
        })
      }
  return (
    <div>
        <h1 style={{ textAlign: "center",
    color: "#bddbff"}}>are you stack! be smart and use <span style={{color: "#fee440",
    fontWeight: "bold"}}>AI</span></h1>
    <div className="ai_nav_items">
        <ul>
            <li className='active-ai'>based on story</li>
            <li>similier to</li>
            <li>Suggestion by types</li>
        </ul>
    </div>
    <div ref={divRef} contenteditable="true" className='ai-write-area' autoFocus={true}></div>
    <div className='ai-btn'>
        <button>clear</button>
        <button className='ai-generate' onClick={test}>generate</button>
        </div>
        <div className='ai-result-area'>
            {result?.map(item =>(
                <div className="ai-card">
                    <ul>
                        <li><h2>{item.title}</h2></li>
                        <li><h3>{item.year}</h3></li>
                        <li>{item.description}</li>
                        <li>{item.language}</li>
                        <li>{item.duration}</li>
                        <li>{item.genre}</li>
                         <li className='link'>watch</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default AI

