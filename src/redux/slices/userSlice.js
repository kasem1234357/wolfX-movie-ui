import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {initialState} from '../intialStates/userState'
import { notification_layout_actions } from "../actions/notification"
import { user_layout_actions} from "../actions/user"
import { authExtraReducers } from "../actions/auth";
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      ...notification_layout_actions,
      ...user_layout_actions,
    },
    extraReducers(builder) {
      authExtraReducers(builder);
    },
  });
export const getStatus = (state)=> state.users.status
export const {addUser} = userSlice.actions;
export default userSlice.reducer