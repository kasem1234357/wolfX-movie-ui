import axios from "axios"

export const startVerifiedOperation = (userID,cb=[],errCb=[])=>{
   axios.get('https://wolfxmovie2.onrender.com/api/auth/get-verified/'+userID).then(res =>{
     console.log(res)
     
     cb.length >0 &&cb.forEach(el =>{
        el.callback(...el.arg)
     })
   }).catch(err =>{
     console.log(err);
    errCb.length >0 && errCb.forEach(el =>{
        el.callback(...el.arg)
     })
   })
}