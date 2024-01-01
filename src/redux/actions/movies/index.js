export const movies_layout_actions = {
    addMovie:(movies, action) => {

        movies.data.push(action.payload); 
   },
    deleteMovies:(movies,action)=>{
      movies.data =movies.data.filter(mov=> mov.id !== action.payload.id)
    },
    searchUpdate:(movies,action)=>{
       movies.querry = action.payload
    },
    restore:(movies,action)=>{
     movies.data = action.payload
    }
   
}