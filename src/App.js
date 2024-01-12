
import {  Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Loading from "./components/custom/Loading";
import Main from "./components/Main";
import {getStatus} from './redux/slices/userSlice'
import { useDispatch, useSelector } from "react-redux";
import { restore } from "./redux/slices/movieSlice";
import { lazy, Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Watch from "./pages/Watch";
import ActorMovies from "./pages/ActorMovies";
import { Helmet } from "react-helmet";
const Account = lazy(()=> import('./pages/Account'))
const Faviorate = lazy(()=> import('./pages/Faviorate'))
const Notification = lazy(()=> import("./pages/Notification"))
const MoviePage = lazy(()=> import("./pages/MoviePage"))
const Explore = lazy(()=> import("./components/Explore"))
const Download  = lazy(()=> import("./pages/Download"))
const ActorsPage = lazy(()=> import("./pages/ActorsPage"))
function App() {

  const status = useSelector(getStatus)
  const user = useSelector(state => state.users.user)
  const dispatch = useDispatch()
   useEffect(()=>{
       dispatch(restore(user?.favMovies))
   },[status,user])
  return(
    <>
     <Helmet>
        <title>
          midnightX app
        </title>
        <meta name="description" content="Explore a world of entertainment on midnightX. Watch and download a vast collection of movies and TV shows in high quality. From timeless classics to the latest releases, midnightX is your go-to destination for cinematic pleasure. Start streaming now!"/>
      </Helmet>
    <Suspense fallback={<Loading/>}>
     
    <Routes>
        <Route path="/" element={<Home />} >
         <Route path="" element={<Main />}/>
         <Route path="/MoviePage" element={<MoviePage />}/>
         <Route path="notification" element={<Notification/>}/>
         <Route path="exploreActors" element={<ActorsPage />}/>
         <Route path="exploreActors/actor" element={<ActorMovies />}/>
         <Route path="explore/:name" element={<Explore />}/>
         <Route path='fav' element={<Faviorate />}/>
         <Route path='download' element={<Download />}/>
           <Route path='/watch' element={<Watch />}/>
        </Route>
        <Route path='account' element={<Account/>}/>
        </Routes>
    </Suspense>
     {/* { popUpOpen && (<PopUp type={typePopup}/>) } */}
       
     <ToastContainer/>
    </>
   
    
  )
}

export default App;
