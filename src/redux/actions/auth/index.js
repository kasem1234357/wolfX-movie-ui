import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {jwtDecode} from "jwt-decode";
import observable from '../../../utils/notification';

const LOG_URL ="https://wolfxmovie2.onrender.com/api/auth/login"
const GET_USER = "https://wolfxmovie2.onrender.com/api/users/"
export const logUser = createAsyncThunk('user/checkUser', async (initialUser) => {
 const response = await axios.post(LOG_URL, initialUser)
 return response.data
})
export const getUser = createAsyncThunk("user/getUser",async (userId)=>{
    const response = await axios.get(`${GET_USER}${userId.userId}`)
 return response.data
})

export const authExtraReducers = (builder)=>{
    return (
        builder
  .addCase(logUser.pending, (state, action) => {
      state.status = 'loading'
  })
  .addCase(logUser.fulfilled, (state, action)=>{
   state.status = 'succeeded'
   const decodedUser = jwtDecode(action.payload);
   state.user = decodedUser
   localStorage.setItem('userToken', JSON.stringify(action.payload));
   state.verified = decodedUser.verified
   localStorage.setItem("isVerified", decodedUser.verified);
   localStorage.setItem('movies',JSON.stringify(decodedUser.favMovies));

   observable.notify({type:"success",msg:"login done"});
  })
  .addCase(logUser.rejected, (state, action) => {
   state.status = 'failed'
   state.error = action.error.message
   observable.notify({type:"error",msg:"something going wrong"});
}).addCase(getUser.pending, (state, action) => {
    state.status = 'loading'
})
.addCase(getUser.fulfilled, (state, action)=>{
 state.status = 'succeeded'
 state.user = action.payload
 localStorage.setItem('user', JSON.stringify(action.payload._id));
})
.addCase(getUser.rejected, (state, action) => {
 state.status = 'failed'
 state.error = action.error.message
})
    )}