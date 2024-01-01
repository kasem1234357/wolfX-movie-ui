import { configureStore} from '@reduxjs/toolkit'
import moviesReducer from './slices/movieSlice'
import usersReducer from './slices/userSlice'
// import { addMovie, deleteMovies,searchUpdate } from '../utils/movies'
export const store =  configureStore({reducer:{
  movies: moviesReducer,
  users:usersReducer
}})
