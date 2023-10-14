import React, {useEffect, useState} from 'react';
import api from './api'
import MovieCard from './components/MovieCard'

function TheaterMovies() {
  const [query, setQuery] = useState({language: 'en-US', page: 1})
  const [movieList, setMovieList] = useState<Array<any>>([
  ])
  const [error, setError] = useState()

  useEffect(() => {
    api.getCurrentMovieOnTheaters(query)
      .then(data => {
        if (data) {
          setMovieList(data.results)
        }
      })
      .catch(err => {
        setError(err)
      })
  })

  return (
    <article>
      <div className={'container'}>
        <section className={'upcoming'}>
          <ul className={'movies-list'}>
            {movieList && movieList.map((movie, index) => {
              return (
                <li key={index}>
                  <MovieCard movie={movie}/>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default TheaterMovies;
