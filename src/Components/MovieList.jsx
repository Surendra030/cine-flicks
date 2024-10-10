import React, { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {


    const fetchMovies = async () => {
      try {

        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        
        const data = await response.json();
        setMovies(data.results);
        
      } catch (error) {
        setError(error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return (
    <div>
      <h1>Popular Movies</h1>
      {error && <p>Error fetching movies: {error.message}</p>}
      <div>
        {movies.length === 0 ? (
          <p>Loading movies...</p>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.overview}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieList;
