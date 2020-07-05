import React from 'react';
import { Link } from '@reach/router';
import { SMovieThumb } from '../styles/SMovieThumb';

const MovieThumb = ({ image, movieId, clickable, movieName }) => (
  <SMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="movie" />
      </Link>
    ) : (
      <img src={image} alt="movie" />
    )}
     <p>{movieName} </p>
  </SMovieThumb>
 
)

export default MovieThumb;

