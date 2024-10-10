import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import MovieProfileHeader from './MovieProfileHeader';
import MovieOverview from './MovieOverview';
import RelatedMovies from './RelatedMovies';
import TrendingMovies from './TrendingMovies';

import '../movieprofile.css';

export default function MovieProfile() {

  const { id } = useParams();  

  const [movie, setMovie] = useState(null);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovieDetails = async () => {
    try {
      
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
      const data = await response.json();
      setMovie(data);

    } catch (error) {
      console.error('Failed to fetch movie details:', error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]); 

  return (
    <div className="movie-profile-container bg-light">
      <MovieProfileHeader title={movie ? movie.title : 'Loading...'} />
      
      {movie ? <MovieOverview movie={movie} /> : <p>Loading movie details...</p>}
      
      {movie ? <RelatedMovies movieId={movie.id} /> : <p>Loading related movies...</p>}

      <TrendingMovies/>
    </div>
  );
}
