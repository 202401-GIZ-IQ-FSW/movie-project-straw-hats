// pages/actor/[id].js

import React from 'react';
import Navbar from '/components/Navbar'; // Adjust the path as per your project structure
import '../src/app/globals.css';

const ActorsPage = ({ actor }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h1 className="text-3xl font-bold mb-4">{actor.name}</h1>
          <div className="flex items-center mb-4">
            <img
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.name}
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <p className="text-lg text-gray-700">Date of Birth: {actor.birthday}</p>
              <p className="text-lg text-gray-700">Place of Birth: {actor.place_of_birth}</p>
            </div>
          </div>
          <p className="text-lg text-gray-700">{actor.biography}</p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    console.log('Actor ID:', id); // Log the actor ID to the console
    const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=dab11bb1b0e0ea35a5fd7a3a44dd8f1c&language=en-US`);
    const actor = await res.json();
    return { props: { actor } };
  } catch (error) {
    console.error('Error fetching actor data:', error);
    return { props: { actor: null } };
  }
}

export default ActorsPage;
