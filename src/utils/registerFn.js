import axios from 'axios';
import { handleClick } from '../configs/notificationConfig';
import { addUser } from '../redux/slices/userSlice';
export const register = (target,values,cb /*callbacks */) => {
    target.preventDefault();
    try {
      console.log({
        userName:values.userName,
        email:values.email,
        password:values.password
      });
      axios.post('https://wolfxmovie2.onrender.com/api/auth/register',{
        userName:values.userName,
        email:values.email,
        password:values.password
      }).then(responce => {
        handleClick({type:"success",msg:"user added"})
        cb.dispatch(addUser(responce.data))
        console.log(responce.data)
       cb.navigate('/')
      }).catch(error =>{
        if(error.response){ 
          handleClick({type:"error",msg:error.response.data.error})
        };
        
      })
    } catch (error) {
      handleClick({type:"error",msg:"something going wrong try again later"})
      console.log(error);
    }
   
  };