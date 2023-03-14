import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from 'pages/Movies'
import { MovieDetails } from 'pages/MovieDetails'
import { Cast} from 'pages/Cast'
import {Reviews } from 'pages/Reviews'
import { NotFound } from 'pages/NotFound'
import { SharedLaout } from "./SharedLaout/SharedLaout";
// import{searchMovie}from'../api'
export const App = () => {
  return (
    <div
    // style={{
    //   width:'1200px',
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   // fontSize: 40,
    //   color: '#010101'
    // }}
    >
     
      <Routes>
      <Route path='/' element={<SharedLaout />} >
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} >
          <Route path='/movies/:movieId/cast' element={<Cast />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Route>
      </Routes>
    </div>
  );
};
