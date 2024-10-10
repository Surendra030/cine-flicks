import { useEffect, useRef, useState } from 'react';
import '../MovieGrid.css'; 
import MovieGrid from './MovieGrid';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  
  const scrollRef = useRef(null); 
  
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
     const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        // Scroll to the right by 220 pixels (width of each card plus gap)
        scrollRef.current.scrollLeft += 220;

        // Reset scroll when reaching the end of the list
        if (scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="p-2 m-5 movie-grid">
      <h2>Upcoming Movies</h2>
      <div className="movies-list w-100" ref={scrollRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px 0' }}>
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
          <p>Loading upcoming movies...</p>
        )}
      </div>
      {error && <p className="error">Error: {error.message}</p>}
    </div>
  );
};

export default UpcomingMovies;
