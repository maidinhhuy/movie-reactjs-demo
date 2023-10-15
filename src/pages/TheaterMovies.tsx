import React, {useEffect, useState} from 'react';
import api from '../api'
import MovieCard from '../components/MovieCard'

function TheaterMovies() {
  const [query, setQuery] = useState({language: 'en-US', page: 1})
  const [movieList, setMovieList] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    api.getCurrentMovieOnTheaters(query)
      .then(data => {
        setLoading(false)
        if (data) {
          setMovieList(data.results)
        } else {
          setError('Movie list is empty')
        }
      })
      .catch(err => {
        setError(err)
      })
  }, [])

  return (
    <article>
      <div className={'container'}>
        <section className={'upcoming'}>
          {loading && (
            <div className={'status-box'}>
              <div className={'spinner'}/>
            </div>
          )}
          {error && (
            <div className={'status-box'}>
              {error}
            </div>
          )}
          <ul className={'movies-list grid'}>
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
