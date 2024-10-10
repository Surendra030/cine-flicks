import { useEffect, useState } from 'react';
import '../MovieContainer.css'; 
import MovieContainer from '../Components/MovieContainer'; 
const WebSeries = () => {
  const [webSeries, setWebSeries] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY; 

  useEffect(() => {
    const fetchWebSeries = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setWebSeries(data.results); 
      } catch (error) {
        setError(error);
      }
    };

    fetchWebSeries();
  }, [apiKey]);

  return (
    <div className="p-5 m-5 container-movie-grid bg-light border rounded">
      <h2>Popular Web Series</h2>
      <div className="container-movie-list">
        {webSeries.length > 0 ? (
          webSeries.map((series) => (
            <MovieContainer 
              key={series.id}
              id={series.id} 
              title={series.name} 
              poster_path={series.poster_path} 
              overview={series.overview} 
              rating={series.vote_average} 
            />
          ))
        ) : (
          <p>{error ? `Error: ${error.message}` : 'Loading Web Series...'}</p>
        )}
      </div>
    </div>
  );
};

export default WebSeries;
