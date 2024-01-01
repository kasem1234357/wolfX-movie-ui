import { createSlice } from "@reduxjs/toolkit";
import {initialState} from '../intialStates/movieState'
import {movies_layout_actions} from '../actions/movies'
export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
     ...movies_layout_actions
    },
  });

  export const {addMovie,deleteMovies,searchUpdate,restore} = movieSlice.actions;
  export default movieSlice.reducer;