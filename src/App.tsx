import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './app.scss';
import TheaterMovies from './TheaterMovies'
import Layout from './Layout'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TheaterMovies/>}/>
          <Route path={'movie/:id'} element={<MovieDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
