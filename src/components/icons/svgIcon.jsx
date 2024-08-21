import React from 'react'
import { memo } from 'react'
export const Arrow=memo((props)=>{
  const {color,...otherProps} = props
  return<svg {...otherProps} className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M7.6 5.8c0 .4.1.7.4.9l4.6 4.3c.5.5.5 1.4 0 1.9L8 17.2c-.3.2-.4.6-.4.9 0 1.1 1.3 1.7 2.1.9l6.8-6.2c.6-.5.6-1.4 0-1.9l-6.8-6c-.8-.7-2.1-.1-2.1.9z"></path></g></svg>
})
export const Rating =memo((props)=>{
  const {color,...otherProps} = props
  return <svg {...otherProps}  className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M8.9 8.8H2.1c-1 0-1.4 1.2-.6 1.8l5.5 4-2.1 6.5c-.3.9.8 1.7 1.5 1.1l5.5-4 5.5 4c.8.6 1.8-.2 1.5-1.1L17 14.6l5.5-4c.8-.6.4-1.8-.6-1.8H15l-2-6.5c-.3-.9-1.6-.9-1.9 0L8.9 8.8z"></path></g></svg>
})
export const Download=memo((props)=>{
  const {color,...otherProps} = props
  return <svg  {...otherProps} 
   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M19 10c-.8-.8-2.1-.8-2.8 0L14 12.1V4c0-1.1-.9-2-2-2s-2 .9-2 2v8.2L7.8 10c-.7-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.6 5.6c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5.5-5.5c.9-.8.9-2.1.1-2.9zM21 16c-.5 0-1 .5-1 1v3H4v-3c0-.5-.5-1-1-1s-1 .5-1 1v4c0 .5.5 1 1 1h18c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1z"></path></g></svg>
})
export const Home=memo((props)=>{
  const {color,...otherProps} = props
  return <svg {...otherProps}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill={color?color:'#fff'}>
   <g>
    <path d="M12,3l-9.5,9.5c-0.3,0.3-0.3,0.7,0,1l0,0c0.3,0.3,0.7,0.3,1,0L12,5c0,0,8.5,8.5,8.5,8.5c0.3,0.3,0.7,0.3,1,0v0   c0.3-0.3,0.3-0.7,0-1L12,3z"></path>
    <path d="M12,6l-7,7v8h5v-4c0-1.1,0.9-2,2-2s2,0.9,2,2v4h5v-8L12,6z"></path>
  </g>
  </g>
</svg>
  
})
export const BookMark =memo((props)=>{
  const {color,...otherProps} = props
  return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}>
  <polygon points="18,22 12,16 6,22 6,2 18,2 "></polygon>
  </g></svg>
  
})
export const Close =memo((props)=>{
  const {color,...otherProps} = props
  return <svg  {...otherProps} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><g fill={color?color:'#fff'} data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
})
export const Notifications =memo((props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z"fill={color?color:'#fff'}  /></svg>
})
export const Apps =memo((props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 144 24"><path  d="M10,2H3C2.4,2,2,2.4,2,3v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V3C11,2.4,10.6,2,10,2z M10,13H3c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1v-7C11,13.4,10.6,13,10,13z M21,2h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M21,13h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1v-7C22,13.4,21.6,13,21,13z" fill={color?color:'#fff'}/></svg>
})
export const Plus =memo((props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 455 455" enableBackground='new 0 0 455 455' width={'15px'} >
<polygon  fill={color?color:'#fff'} points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
 455,242.5 "/></svg>
})
export const Success = memo((props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M22.5 4.5c-.8-.8-2.2-.8-3 0L9 15l-4.5-4.5c-.8-.8-2.2-.8-3 0s-.8 2.2 0 3L9 21 22.5 7.5c.8-.8.8-2.2 0-3z"></path></g></svg>
})
// export const Warning = memo((props)=>{
//   const {color,...otherProps}=props
//   return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#cedd45'><path fill='#22262a' d="M12 0L0 23h24L12 0zm0 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v6c0 1.1-.9 2-2 2z"></path></g></svg>
  
// })
export const Filter = memo((props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M19.6 5H4.4c-.9 0-1.3 1.1-.7 1.7L10 13v6c0 .8.9 1.3 1.6.8l2-1.5c.3-.2.4-.5.4-.8V13l6.3-6.3c.6-.6.2-1.7-.7-1.7z"></path></g></svg>
  
})
export const Warning = memo((props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill={color?color:'#fff'}><path d="M12 0L0 23h24L12 0zm0 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v6c0 1.1-.9 2-2 2z"></path></g></svg>
  
})
export const AiIcon = memo((props)=>{
  const {color,...otherProps}=props
  return <svg {...otherProps} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill={color?color:'#fff'}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ai-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <g> <path d="M17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4l-.6.5-4,3.3a.8.8,0,0,0-.4.8v9a.9.9,0,0,0,.4.8l4,3.3.6.5v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2,4-2.7V25.5H21a1.5,1.5,0,0,1,0-3h1.5V4.9l-4-2.7ZM9,13.5l2.8,1.9a1.5,1.5,0,0,1,.4,2.1,1.4,1.4,0,0,1-1.2.7,1.1,1.1,0,0,1-.8-.3L9,17.1Zm-5,9H7.5a1.5,1.5,0,0,1,0,3H4Zm5,8.4,1.2-.8a1.4,1.4,0,0,1,2,.4,1.5,1.5,0,0,1-.4,2.1L9,34.5ZM19.5,18.6l-4,4v2.8l4,4v5.2l-3.4,3.5a2.1,2.1,0,0,1-1.1.4,2.1,2.1,0,0,1-1.1-.4,1.6,1.6,0,0,1,0-2.2l2.6-2.5V30.6l-4-4V21.4l4-4V14.6l-2.6-2.5a1.6,1.6,0,1,1,2.2-2.2l3.4,3.5Z"></path> <path d="M45.6,18.7l-4-3.3-.6-.5V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2-4,2.7V22.5H27a1.5,1.5,0,0,1,0,3H25.5V43.1l4,2.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l.6-.5,4-3.3a.9.9,0,0,0,.4-.8v-9A.8.8,0,0,0,45.6,18.7ZM39,17.1l-1.2.8a1.1,1.1,0,0,1-.8.3,1.4,1.4,0,0,1-1.2-.7,1.5,1.5,0,0,1,.4-2.1L39,13.5ZM28.5,29.4l4-4V22.6l-4-4V13.4l3.4-3.5a1.6,1.6,0,0,1,2.2,2.2l-2.6,2.5v2.8l4,4v5.2l-4,4v2.8l2.6,2.5a1.6,1.6,0,0,1,0,2.2,1.7,1.7,0,0,1-2.2,0l-3.4-3.5ZM39,34.5l-2.8-1.9a1.5,1.5,0,0,1-.4-2.1,1.4,1.4,0,0,1,2-.4l1.2.8Zm5-9H40.5a1.5,1.5,0,0,1,0-3H44Z"></path> </g> </g> </g> </g></svg>
})
