import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import utils from '../pages/utils'
import LazyImage from './LazyImage'
import default_image from '../assets/images/default-thumbnail.jpeg'

function MovieCard(props: { movie: Movie }) {
  let {movie} = props
  let year = new Date(Date.parse(movie.release_date)).getFullYear()
  return (
    <Link to={`/movie/` + movie.id}>
      <div className={'movie-card'}>
        <figure className={`card-banner ${movie.poster_path ? '' : 'skeleton'}`}>
          <LazyImage
            alt={movie.title}
            unloadedSrc={default_image}
            src={utils.getImageUrl(movie.poster_path, 500)}
          />
        </figure>
        <div className={`title-wrapper ${movie.title ? '' : 'skeleton'}`}>
          <h3 className={`card-title`}>{movie.title}</h3>
          <time>{year}</time>
        </div>
        <div className={`card-meta ${movie.original_language ? '' : 'skeleton'}`}>
          <div className="badge badge-outline">{movie.original_language}</div>
          <div className="popularity">
            <span>{movie.popularity}</span>
          </div>
          <div className="rating">
            <FontAwesomeIcon icon={faStar}/>
            <data>{movie.vote_average}</data>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
