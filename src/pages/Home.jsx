import React, {  useState } from 'react'
import { lazy } from 'react';

import Feed from '../components/layouts/Feed/Feed';
import '../styles/template.css';
import '../styles/index.css';
import '../styles/custom.css';
import '../styles/moviesBox.css';
import '../styles/media.css';
const RightBar = lazy(()=>import('../components/layouts/RightBar/RightBar'))

function Home() {
  const[active,setActive]= useState(false);

  return (

    <div className='root bg-dark'>
      <div className="flex  hidden">
      
      <Feed active={active} setActive={setActive}/>
      <RightBar active={active} setActive={setActive}/>
     
    </div>
    </div>
    
  );
}

export default Home