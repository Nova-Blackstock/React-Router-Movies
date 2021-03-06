import React from 'react';
import { useParams } from 'react-router-dom'

const MovieCard = props => {
  const param = useParams()
  const index = param.id
  const movies = props.movies
  const movie = movies[index]

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;
