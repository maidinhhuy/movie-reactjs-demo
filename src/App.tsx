import React, {useEffect, useState} from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import TheaterMovies from './pages/TheaterMovies'
import Layout from './components/Layout'
import MovieDetails from './pages/MovieDetails'
import NetworkDetector from './NetworkDetector'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TheaterMovies/>}/>
          <Route path={'movie/:id'} element={<MovieDetails/>}/>
          <Route path={'top-rated'} element={<TheaterMovies/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NetworkDetector(App);
