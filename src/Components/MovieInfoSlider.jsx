import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const MovieInfoSlider = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        
        const data = await response.json();
        setMovies(data.results); 
        
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [movies]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="movie-overview mb-5">
      <h2 className="text-center fs-3 my-3">Movie Overview</h2>

      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        <MovieCard movie={movies[currentMovieIndex]} />
      )}
    </div>
  );
};

export default MovieInfoSlider;
