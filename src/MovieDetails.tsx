import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';

import api from './api'
import utils from './utils'
import LazyImage from './components/LazyImage'
import default_image from './assets/images/default-thumbnail.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props: {}) {
  const params = useParams()

  const [movie, setMovie] = useState<any>({})
  const [year, setYear] = useState<number>()

  useEffect(() => {
    if (params && params.id) {
      api.getMovieDetails(params.id, 'en-US')
        .then(result => {
          setMovie(result)
          setYear(new Date(Date.parse(movie.release_date)).getFullYear())
        }).catch()
    }
  })
  if (movie) {
    return (
      <main>
        <article>
          <section className="movie-detail">
            <div className="container">
              <figure className="movie-detail-banner">
                {movie.poster_path &&
                <LazyImage unloadedSrc={default_image} src={utils.getImageUrl(movie.poster_path, 500)}
                           alt={movie.title}/>}
              </figure>
              <div className="movie-detail-content">
                <p className="detail-subtitle">{movie.original_title}</p>
                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">{movie.adult ? '18+' : 'everyone'}</div>
                    <div className="badge badge-outline">{movie.original_language}</div>
                  </div>
                  <div className="ganre-wrapper">
                    {movie.genres && movie.genres.map((item: { id: number, name: string }) => {
                      return (
                        <a href={'#'} key={item.id}>{item.name}</a>
                      )
                    })}
                  </div>
                  <div className="date-time">
                    <div>
                      <time>{year}</time>
                    </div>
                    <div>
                      <time>{movie.popularity}</time>
                    </div>
                  </div>
                </div>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar}/>
                  <data>{Math.round(movie.vote_average * 100)/100}</data>
                </div>
                <p className="storyline">
                  {movie.overview}
                </p>
                <a href="#" download className="download-btn">
                  <span>Download</span>
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>
    );
  } else {
    return <div>{'Not found'}</div>
  }
}

export default MovieDetails;
