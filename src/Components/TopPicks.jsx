import React from 'react'
import MovieGrid from './MovieGrid';

const moviesData = [
    {
      title: "The Story Man",
      year: "2020",
      genre: "Action, Adventure, Drama, Comedy",
      img: "/path/to/image1.jpg", // Replace with actual image paths
      rating: 0
    },
    {
      title: "Wonder 2 Fadius",
      year: "2020",
      genre: "Action, Adventure, Drama",
      img: "/path/to/image2.jpg",
      rating: 3
    },
    {
      title: "The Friends",
      year: "2020",
      genre: "Action, Adventure, Drama, Comedy",
      img: "/path/to/image3.jpg",
      rating: 0
    },
    {
        title: "The Story Man",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image1.jpg", // Replace with actual image paths
        rating: 0
      },
      {
        title: "Wonder 2 Fadius",
        year: "2020",
        genre: "Action, Adventure, Drama",
        img: "/path/to/image2.jpg",
        rating: 3
      },
      {
        title: "The Friends",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image3.jpg",
        rating: 0
      },
      {
        title: "The Story Man",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image1.jpg", // Replace with actual image paths
        rating: 0
      },
      {
        title: "Wonder 2 Fadius",
        year: "2020",
        genre: "Action, Adventure, Drama",
        img: "/path/to/image2.jpg",
        rating: 3
      },
      {
        title: "The Friends",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image3.jpg",
        rating: 0
      },
      {
        title: "The Story Man",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image1.jpg", // Replace with actual image paths
        rating: 0
      },
      {
        title: "Wonder 2 Fadius",
        year: "2020",
        genre: "Action, Adventure, Drama",
        img: "/path/to/image2.jpg",
        rating: 3
      },
      {
        title: "The Friends",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image3.jpg",
        rating: 0
      },
      {
        title: "The Story Man",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image1.jpg", // Replace with actual image paths
        rating: 0
      },
      {
        title: "Wonder 2 Fadius",
        year: "2020",
        genre: "Action, Adventure, Drama",
        img: "/path/to/image2.jpg",
        rating: 3
      },
      {
        title: "The Friends",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image3.jpg",
        rating: 0
      },
      {
        title: "Wonder 2 Fadius",
        year: "2020",
        genre: "Action, Adventure, Drama",
        img: "/path/to/image2.jpg",
        rating: 3
      },
      {
        title: "The Friends",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image3.jpg",
        rating: 0
      },
      {
        title: "The Story Man",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image1.jpg", // Replace with actual image paths
        rating: 0
      },
      {
        title: "Wonder 2 Fadius",
        year: "2020",
        genre: "Action, Adventure, Drama",
        img: "/path/to/image2.jpg",
        rating: 3
      },
      {
        title: "The Friends",
        year: "2020",
        genre: "Action, Adventure, Drama, Comedy",
        img: "/path/to/image3.jpg",
        rating: 0
      }
  ];
export default function TopPicks() {
    return (
        <div className=" p-2 m-5 movie-grid">
            <h2>Top Picks For You</h2>
            <div className="movies-list" >
                {moviesData.map((movie, index) => (
                    <MovieGrid movie={movie} index={index} />
                ))}
            </div>
        </div>
    );
}
