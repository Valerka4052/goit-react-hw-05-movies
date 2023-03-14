import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from 'pages/Movies'
import { MovieDetails } from 'pages/MovieDetails'
import { Cast} from 'pages/Cast'
import {Reviews } from 'pages/Reviews'
import {NotFound}from 'pages/NotFound'
// import{searchMovie}from'../api'
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} >
          <Route path='/movies/:movieId/cast' element={<Cast />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </div>
  );
};
