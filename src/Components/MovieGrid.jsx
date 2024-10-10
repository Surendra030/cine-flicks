import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieGrid({ id, title, poster_path, overview, rating }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie-grid-card" key={id} onClick={handleCardClick}>
      <div className="movie-grid-card-content">
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          className="movie-grid-card-img"
          alt={title}
        />
        <div className="movie-grid-card-body">
          <h5 className="movie-grid-card-title">{title}</h5>
          <p className="movie-grid-card-overview">
            {overview.slice(0, 20)}{overview.length > 20 ? "..." : ""}
          </p>
          <div className="movie-grid-card-rating">
            <span>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
