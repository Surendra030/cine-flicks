import React, { useEffect, useState } from 'react';

export default function RelatedMovies({ movieId }) {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const limit = 5
  const fetchRelatedMovies = async () => {
    try {
      
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&language=en-US`);
      const data = await response.json();
      setRelatedMovies(data.results.slice(0,limit));


    } catch (error) {
      console.error('Failed to fetch related movies:', error);
    }
  };

  useEffect(() => {

    if (movieId) {
      fetchRelatedMovies();
    }
  }, [movieId]);

  return (
    <div className="related-movies-section">
      <h2 className='text-center my-5 fs-1 fw-bold'>Related Movies</h2>
      <div className="related-movies-list d-flex flex-column align-items-center pt-5">
        {relatedMovies.length > 0 ? (
          relatedMovies.map((movie) => (
            <div key={movie.id} className="related-movie-card bg-light d-flex justify-content-between w-75 border border-danger mb-4">
              
              <div className='related-movie-image me-5'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className='h-100 p-5'
                />
              </div>

              <div className="related-movie-details p-5 d-flex flex-column justify-content-evenly">
                <h3 className="related-movie-title">{movie.title}</h3>
                <p className="release-year">2020 / Action, Adventure, Drama, Comedy</p>
                <p className="movie-rating">
                  <strong>Rating  &nbsp; : &nbsp; </strong> {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} / 10
                </p>
                <p className="related-movie-overview">
                  Consectetur adipiscing elit. Mauris eu gravida augue. Ut tincidunt, leo ut bibendum convallis, dolor arcu faucibus dolor, a faucibus dui dolor ac orci. Nam diam felis molestie in lacus quis fringilla placerat sem. Proin blandit sagittis diam sed congue. In porta vitae nunc quis pharetra. Etiam luctus ante vitae egestas eleifend.
                </p>
                <p className="additional-info">
                  <strong>Starring:</strong> Alies vhaess, kassah napwer<br />
                  <strong>Genres:</strong> Drama, International<br />
                  <strong>Subtitles:</strong> Hindi, Urdu<br />
                  <strong>Audio languages:</strong> German, Spanish
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No related movies found.</p>
        )}
      </div>
    </div>
  );
}
