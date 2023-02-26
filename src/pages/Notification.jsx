import React, { Suspense } from 'react'
import { lazy } from 'react'
import Loading from '../components/Loading'
const ToastBox = lazy(()=>import("../components/ToastBox"))
function Notification() {
  return (
    <Suspense fallback={<Loading/>}>
       <div className=' fill flow '>
    <ToastBox type={'account'}/>
    <ToastBox type={'update'}/>
    <ToastBox type={'security'}/>
    <ToastBox type={'account'}/>
    <ToastBox type={'update'}/>
    <ToastBox type={'security'}/>
    </div>
    </Suspense>
   
  )
}

export default Notification