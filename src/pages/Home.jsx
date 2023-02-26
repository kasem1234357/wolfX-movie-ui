import React, {  useState } from 'react'
import { lazy } from 'react';

import Feed from '../components/Feed/Feed';
import '../index.css';
// import PopUp from '../components/PopUp/PopUp';

const RightBar = lazy(()=>import('../components/RightBar/RightBar'))
// import { contextData } from '../dataBase/context';

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