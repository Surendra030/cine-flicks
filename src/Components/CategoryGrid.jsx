import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const colors = [
    '#ff5722', '#9c27b0', '#3f51b5', '#4caf50', '#ffc107', '#f44336',
    '#e91e63', '#00bcd4', '#607d8b', '#009688', '#795548', '#ff9800'
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try

       {
          const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
           
          const data = await response.json();

          setCategories(data.genres); // Set the genres in state
       }

       catch (error) 
       {
        setError(error); // Set any errors that occur during the fetch
      }
    };

    fetchCategories(); 
  }, [apiKey]);

  return (
    <div className="p-5 m-5 category-grid">
      <h2 className="text-center">Browse by Category</h2>

      <div className="row mt-5">
        {error ? (
          <p>Error fetching categories: {error.message}</p> 
        ) : (
          categories.length > 0 ? (
            categories.slice(0, 12).map((category, index) => (
              <div className="col-6 col-md-3 mb-4" key={category.id}>
                <CategoryCard
                  category={{
                    name: category.name,
                    color: colors[index % colors.length] // Assign color based on index
                  }}
                />
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )
        )}
      </div>

    </div>
  );
};

export default CategoryGrid;
