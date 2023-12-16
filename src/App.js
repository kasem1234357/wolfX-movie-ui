
import {  Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Loading from "./components/Loading";
import Main from "./components/Main";
import {getStatus} from './utils/users'
import { useDispatch, useSelector } from "react-redux";
import { restore } from "./utils/movies";
import { lazy, Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Watch from "./pages/Watch";
const Account = lazy(()=> import('./pages/Account'))
const Faviorate = lazy(()=> import('./pages/Faviorate'))
const Notification = lazy(()=> import("./pages/Notification"))
const MoviePage = lazy(()=> import("./pages/MoviePage"))
const Explore = lazy(()=> import("./components/Explore"))
const Download  = lazy(()=> import("./pages/Download"))
function App() {

  const status = useSelector(getStatus)
  const user = useSelector(state => state.users.user)
  const dispatch = useDispatch()
   useEffect(()=>{
       dispatch(restore(user?.favMovies))
   },[status,user])
  return(
    <>
    <Suspense fallback={<Loading/>}>
    <Routes>
        <Route path="/" element={<Home />} >
         <Route path="" element={<Main />}/>
         <Route path="/MoviePage" element={<MoviePage />}/>
         <Route path="notification" element={<Notification/>}/>
         <Route path="exploreActors" element={<ActorsPage />}/>
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
