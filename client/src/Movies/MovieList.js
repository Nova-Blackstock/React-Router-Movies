import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom'


const MovieList = props => {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  const history = useHistory()
  const { movieId } = useParams()
  const routeToMovie = () =>{
    history.push(`/movies/${movieId}`)
  }
  
  return (
    <Link to={`/movies/${movie.id}`}>
    <div className="movie-card" onClick={routeToMovie}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
  );
}

export default MovieList;
