import { Link } from "react-router-dom";

import { faStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG 

const MovieCard = ({movie, showLink = true}) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt="imagem" />
        </div>
    )
}

export default MovieCard 