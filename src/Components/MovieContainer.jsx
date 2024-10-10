import React from 'react';
import '../MovieContainer.css';

export default function MovieContainer(props) {
    const { id, title, poster_path, overview, rating } = props;

    return (
        <div className="movie-box" key={id}>
            <div className="movie-content">
                <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    className="movie-img"
                    alt={title}
                />
                <div className="movie-details">

                    <h5 className="movie-title">
                        {title.match(/.{1,17}/g).map((chunk, index) => (
                            <React.Fragment key={index}>
                                {chunk}<br />
                            </React.Fragment>
                        ))}
                    </h5>
                    <p className="movie-overview">
                        {overview.slice(0, 50)
                            .match(/.{1,20}/g)
                            ?.map((chunk, index) => (
                                <React.Fragment key={index}>
                                    {chunk}
                                    <br />
                                </React.Fragment>
                            ))}
                        {overview.length > 50 ? "..." : ""}
                    </p>

                    <div className="movie-rating ">
                        <span className='w-100'>⭐ {rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
