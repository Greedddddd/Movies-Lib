import { Link } from "react-router-dom";

import { faStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG 

const MovieCard = ({movie, showLink = true}) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <faStar />{movie.vote_average}       
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}></Link>}
        </div>
    );
};

export default MovieCard 