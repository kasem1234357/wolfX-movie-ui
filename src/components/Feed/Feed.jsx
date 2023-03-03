import React, { memo } from 'react'

import { Link, Outlet,  } from 'react-router-dom';
import { Apps, BookMark, Home,Notifications } from '../../icons/svgIcon';
import './feed.css'
const Feed =memo(({active,setActive}) => {
  // setactive function to open and close  rightbar
  return (
    <div className="flex-box-3 bg-dark grid feed hidden-x feed-box">
        <nav className="flex flex-between feed-nav" >
{/*============= url to the the mian pages==============================*/ }
             <div>
                 <ul className="flex primary-navigation ">
                   <Link to='' className="text-white "><span className='logo-tm'> 12</span>:00<span className='logo-dt'>pm</span></Link>
                 </ul>
             </div>
{/*============= url to the the another pages============================*/ }
             <div>
                 <ul className="flex primary-navigation">
                 <Link to='notification' className="svg-icon">
                    <Notifications width={'20px'} />
                 </Link>
                 <Link to='fav' className="svg-icon">
                    <BookMark/>
                 </Link>
                 <li id="nav-block" className="svg-icon" onClick={()=>setActive(!active)}>
                    <Apps />
                 </li>
                 </ul>
             </div>
  
        </nav>
   <Outlet/>
  </div>
  )
})

export default Feed
