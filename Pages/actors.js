// actors.js

import React from 'react';
import Navbar from '/components/Navbar';
import styles from './actors.module.css'; // Import CSS module

const ActorsPage = ({ actors }) => { // Pass actors data as props
  return (
    <div>
      <Navbar />
      <div className={`container mx-auto py-8 ${styles.container}`}>
        <h1 className="text-3xl font-bold mb-4">Actors</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {actors.map(actor => ( // Map through actors data to render actor cards
            <div key={actor.id} className={`bg-white p-4 rounded shadow-md ${styles.actorCard}`}>
              <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} className={`w-full h-40 object-cover mb-4 rounded ${styles.actorImage}`} />
              <h2 className={`text-xl font-semibold mb-2 ${styles.actorName}`}>{actor.name}</h2>
              <p className={`text-gray-700 ${styles.actorDescription}`}>{actor.character || 'Unknown'} </p> {/* Handle undefined character property */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorsPage;

export async function getServerSideProps() {
  try {
    // Fetch actors data from an API (e.g., TMDB API)
    const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=dab11bb1b0e0ea35a5fd7a3a44dd8f1c');
    const data = await response.json();
    
    // Log the response data to inspect its contents
    console.log(data);

    // Extract relevant data from the response
    const actors = data.results.map(actor => ({
      id: actor.id,
      name: actor.name,
      character: actor.character || 'Unknown', // Handle undefined character
      profile_path: actor.profile_path,
    }));

    // Pass actors data as props to the component
    return {
      props: {
        actors,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        actors: [],
      },
    };
  }
}
