import React from 'react';
import NoImage from '../images/no_image.jpg';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import MovieThumb from './MovieThumb';
import {SMovieInfo} from '../styles/SMovieInfo';
import {calcTime} from '../../helper';

const MovieInfo = ({movie}) => (

    <SMovieInfo backdrop={
        movie.backdrop_path
    }>
        <div className="movieinfo-content">
            <div className="movieinfo-image">
                <MovieThumb image={
                        movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                            movie.poster_path
                        }` : NoImage
                    }
                    clickable={false}
                    alt="moviethumb"/>
            </div>
            <div className="movieinfo-text">
                <h1>{
                    movie.title
                }</h1>
                <h3>Overview</h3>
                <p>{
                    movie.overview
                }</p>

                <div className="rating-director-time">
                    <div>
                        <h3>IMDB Rating</h3>
                        <div className="score">
                            {
                            movie.vote_average
                        }</div>
                    </div>
                    <div className="director">
                        <h3>Director{
                            movie.directors.length > 1 ? 'S' : ''
                        }</h3>
                        {
                        movie.directors.map(element => (
                            <p key={
                                element.credit_id
                            }>
                                {
                                element.name
                            }</p>
                        ))
                    } </div>
                    <div className="time">
                        <h3>Duration</h3>
                        <div> {
                            calcTime(movie.runtime)
                        } </div>
                    </div>

                </div>
            </div>
        </div>
    </SMovieInfo>
);


export default MovieInfo;
