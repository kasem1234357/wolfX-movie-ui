export const user_layout_actions ={
    addUser:(state,action)=>{
        state.status = "succeeded"
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(action.payload._id));
    }
}