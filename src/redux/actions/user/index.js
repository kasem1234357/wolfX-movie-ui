import {jwtDecode} from "jwt-decode";
export const user_layout_actions ={
    addUser:(state,action)=>{
        state.status = "succeeded"
        state.user = jwtDecode(action.payload)
        localStorage.setItem('user', JSON.stringify(action.payload));
    },
    verifiedUser:(state,action)=>{
        state.status = "succeeded"
        state.user.verified = true
    },
    getUser:(state,action)=>{
        state.status = "succeeded"
        const data = localStorage.getItem('user'); 
        const decodedUser = jwtDecode(data);
   state.user = decodedUser
        
    }
}