/*
 problemType: {
      type: [],
      require: true,
    },
    userId: {
      type: String,
      required: true,
    },
    showName: {
      type: String,
      required: true,
    },
    showId: {
      type: String,
      required: true,
    },
    userMsg: {
      type: String,
      default: "",
    },


*/

import axios from "axios";


export const sendReports = (userId,data,setIsLoading) =>{
    setIsLoading(true)
    axios.post('https://wolfxmovie2.onrender.com/api/report',{
        userId,
        ...data
    }).then(res =>{
        console.log(res);
        setIsLoading(false)
    }).catch(err =>{
        console.log(err);
        setIsLoading(false)
    })
 console.log({
    userId,
    ...data
 });
}