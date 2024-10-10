import { useEffect, useState } from 'react';
import '../MovieContainer.css'; 
import MovieContainer from '../Components/MovieContainer';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY; 

  useEffect(() => {
    
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setMovies(data.results); 
      } catch (error) {
        setError(error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return (
    <div className="p-5 m-5 container-movie-grid bg-light border rounded">
      <h2>Popular Movies</h2>
      <div className="container-movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieContainer 
              key={movie.id}
              id={movie.id} 
              title={movie.title} 
              poster_path={movie.poster_path} 
              overview={movie.overview} 
              rating={movie.vote_average} 
            />
          ))
        ) : (
          <p>{error ? `Error: ${error.message}` : 'Loading movies...'}</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
