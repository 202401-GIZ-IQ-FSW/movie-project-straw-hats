import React from 'react';
import Navbar from '/components/Navbar';
import styles from './actors.module.css';

const ActorsPage = ({ actors }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Actors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {actors.map(actor => (
            <div key={actor.id} className={styles.card}>
              <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} className={styles.image} />
              <div className={styles.content}>
                <h2 className={styles.name}>{actor.name}</h2>
                <p className={styles.character}>{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from an external API
  const res = await fetch(`https://api.themoviedb.org/3/...`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { actors: data.results } };
}

export default ActorsPage;
