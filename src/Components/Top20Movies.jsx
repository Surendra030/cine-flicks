import { useEffect, useRef, useState } from 'react';
import '../MovieGrid.css'; 
import MovieGrid from './MovieGrid';  

const Top20Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const scrollRef = useRef(null);  

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const fetchMovies = async () => {
    try {

      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
      const data = await response.json();
      setMovies(data.results);

    }
    catch (error) {
      setError(error);
    }
  };


  useEffect(() => {
    fetchMovies();
  }, [apiKey]);

  useEffect (() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
         scrollRef.current.scrollLeft += 220;

         if (scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000); 

    return () => clearInterval(scrollInterval);  
  }, []);

  return (
    <div className="p-2 m-5 movie-grid">
      <h2>Top 20 Picks</h2>
      <div className="movies-list  w-100" ref={scrollRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px 0' }}>
        {movies.length > 0 ? (
          movies.slice(0, 20).map((movie) => (
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

export default Top20Movies;
