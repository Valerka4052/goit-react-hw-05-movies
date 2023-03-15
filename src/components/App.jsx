import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import  Home  from "pages/Home";
import { Movies } from 'pages/Movies'
// import  MovieDetails  from 'pages/MovieDetails'
import { Cast} from 'pages/Cast'
import {Reviews } from 'pages/Reviews'
import { NotFound } from 'pages/NotFound'
import { SharedLaout } from "./SharedLaout/SharedLaout";
import { Container } from "./App.styled";
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Home = lazy(() => import("../pages/Home"));


export const App = () => {
  return (
    <Container>
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
    </Container>
  );
};
