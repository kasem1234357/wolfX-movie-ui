import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import observable from './notification';
const initialState = {
 user:null,
 status:"idle",
 notification:true,
 error : null //loading || success || failure 
}
const LOG_URL ="https://wolfxmovie2.onrender.com/auth/login"
const GET_USER = "https://wolfxmovie2.onrender.com/api/users/"
export const logUser = createAsyncThunk('user/checkUser', async (initialUser) => {
 const response = await axios.post(LOG_URL, initialUser.initialUser)
 return response.data
})
export const getUser = createAsyncThunk("user/getUser",async (userId)=>{
    const response = await axios.get(`${GET_USER}${userId.userId}`)
 return response.data
})
export const userSlice = createSlice({
 name:"user",
 initialState,
 reducers:{
    addUser:(state,action)=>{
        state.status = "succeeded"
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(action.payload._id));
    },
    toggleNotification:(state)=>{
        state.notification = !state.notification
        const msg = state.notification?"activated now":"unactivated now"
        observable.notify({type:"info",msg});
     },
 },
 extraReducers(builder){
  builder
  .addCase(logUser.pending, (state, action) => {
      state.status = 'loading'
  })
  .addCase(logUser.fulfilled, (state, action)=>{
   state.status = 'succeeded'
   state.user = action.payload
   localStorage.setItem('user', JSON.stringify(action.payload._id));
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
 }
})
export const getStatus = (state)=> state.users.status
export const {addUser} = userSlice.actions;
export default userSlice.reducer
