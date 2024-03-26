import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <div className="mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <p className="text-lg font-bold">Title: {movie.title}</p>
      <p className="text-gray-700">Overview: {movie.overview}</p>
      <p className="text-gray-700">Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;
