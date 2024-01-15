export const movies_layout_actions = {
    addMovie:(movies, action) => {
        const dt = [...movies.data,action.payload]
        movies.data.push(action.payload); 
        localStorage.setItem('movies',JSON.stringify(dt))
   },
    deleteMovies:(movies,action)=>{
      const dt = movies.data.filter(mov=> mov.id !== action.payload.id)
      movies.data = dt
      localStorage.setItem('movies',JSON.stringify(dt))
    },
    searchUpdate:(movies,action)=>{
       movies.querry = action.payload
    },
    restore:(movies,action)=>{
     movies.data = action.payload
    }
   
}