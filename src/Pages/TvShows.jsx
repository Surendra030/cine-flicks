import { useEffect, useState } from 'react';
import '../MovieContainer.css'; 
import MovieContainer from '../Components/MovieContainer'; 

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY; 
  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setTvShows(data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchTvShows();
  }, [apiKey]);

  return (
    <div className="p-5 m-5 container-movie-grid bg-light border rounded">
      <h2>Popular TV Shows</h2>
      <div className="container-movie-list">
        {tvShows.length > 0 ? (
          tvShows.map((tvShow) => (
            <MovieContainer 
              key={tvShow.id}
              id={tvShow.id} 
              title={tvShow.name}  
              poster_path={tvShow.poster_path} 
              overview={tvShow.overview} 
              rating={tvShow.vote_average} 
            />
          ))
        ) : (
          <p>{error ? `Error: ${error.message}` : 'Loading TV shows...'}</p>
        )}
      </div>
    </div>
  );
};

export default TvShows;
