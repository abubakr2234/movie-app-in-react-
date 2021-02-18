import react from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_avarage }) => (
    <div className="movie">
        <div className="movie-header">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_avarage}</span>
        </div>
        <div className="movie-over">
            <h2>overview:</h2>
            <p>{overview}</p>
        </div>
        </div>
        
    </div>
);


export default Movie;