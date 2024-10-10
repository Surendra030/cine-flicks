import React, { useEffect, useState,useRef } from 'react';
import MovieGrid from './MovieGrid';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  
  
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    
     const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
        
        const data = await response.json();
        setMovies(data.results);

      } catch (error) {
        setError(error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  

  return (
    <div className="p-2 m-5 movie-grid">
      <h2>Trending & Latest..</h2>
      <div className="movies-list  w-100"  style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px 0' }}>
        {movies.length > 0 ? (
          movies.slice(0,20).map((movie) => (
            <MovieGrid 
              key={movie.id} 
              id={movie.id} 
              title={movie.title} 
              poster_path={movie.poster_path} 
              overview={movie.overview} 
              rating={movie.vote_average} 
            />
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default TrendingMovies;
