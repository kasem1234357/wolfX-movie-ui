import { configureStore} from '@reduxjs/toolkit'
import moviesReducer from '../utils/movies'
import usersReducer from '../utils/users'
// import { addMovie, deleteMovies,searchUpdate } from '../utils/movies'
export const store =  configureStore({reducer:{
  movies: moviesReducer,
  users:usersReducer
}})
