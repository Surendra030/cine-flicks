import React from 'react';

export default function MovieOverview({ movie }) {
    return (
        <div className=" movie-details-container border border-dark">
            <div className="movie-poster-wrapper">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>

            <div className="movie-info ms-3 ps-5 bg-dark text-light">

                <div className="movie-rating mt-5">
                    <span className="star-icon">&#9733;</span> 
                    <span className="rating-value">{movie.vote_average}</span> 
                </div>

                <h1>{movie.title}</h1>
                <p className="movie-genres">
                    {movie.release_date.slice(0, 4)} / {movie.genres.map(genre => genre.name).join(', ')}
                </p>
                <p>{movie.overview}</p>
                <ul >
                    <li><strong>Directors : &nbsp;</strong> {movie.directors || 'Unknown'}</li>
                    <li><strong>Starring : &nbsp;</strong> {movie.starring || 'Unknown'}</li>
                    <li><strong>Genres : &nbsp;</strong> {movie.genres.map(genre => genre.name).join(', ')}</li>
                    <li><strong>Subtitles : &nbsp;</strong> {movie.subtitles || 'English, Spanish'}</li>
                    <li><strong>Audio Languages : &nbsp;</strong> {movie.languages || 'English'}</li>
                </ul>
            </div>
        </div>
    );
}
