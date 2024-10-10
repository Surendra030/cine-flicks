import React from 'react';
import '../MovieCard.css'
import { useNavigate } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  if (!movie) return null;

  const {id, title, release_date, overview, poster_path, vote_average,  } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  
 
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie_card " onClick={handleCardClick}>
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={imageUrl} alt={title} />
          <h1>{title}</h1>
          <h4>{release_date}</h4>
          <span className="minutes">Rating: {vote_average}</span>
          {/* <p className="type">{genres}</p> */}
        </div>
        <div className="movie_desc">
          <p className="text">{overview}</p>
        </div>
        <div className="movie_social">
          <ul>
            <li><i className="material-icons">share</i></li>
            <li><i className="material-icons">favorite</i></li>
            <li><i className="material-icons">chat_bubble</i></li>
          </ul>
        </div>
      </div>
      <div className="blur_back" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    </div>
  );
};

export default MovieCard;
