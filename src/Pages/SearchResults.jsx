import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieContainer from '../Components/MovieContainer'; // Assuming you have a MovieContainer component

export default function SearchResults() {
    const { 'search-item': searchTerm } = useParams(); // Get the search term from the URL
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1`
                );
                const data = await response.json();
                setMovies(data.results.slice(0, 20)); // Get the first 20 movies
                setLoading(false); // Mark loading as complete
            } catch (error) {
                setError(error);
                setLoading(false); // Mark loading as complete
            }
        };

        fetchMovies();
    }, [searchTerm, apiKey]); // Fetch movies when searchTerm changes

    return (
        <div className="p-5 m-5 container-movie-grid bg-light border rounded">
            <h2>Search Results for "{searchTerm}"</h2>
            <div className="container-movie-list">
                {loading ? (
                    <p>Loading movies...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : movies.length > 0 ? (
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
                    <p>No movies found for "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
}
