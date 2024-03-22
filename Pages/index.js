
import React from 'react';

export default function Home({ popularMovies }) {
  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

  const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  const data = await response.json();

  return {
    props: {
      popularMovies: data.results,
    },
  };
}
