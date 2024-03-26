// actors.js

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Navbar from '/components/Navbar';
import styles from '/Pages/index.module.css'; // Import your CSS module
import '../src/app/globals.css';
import ActorPage from '/actor/[id]'; // Import the ActorPage component

const ActorPage = ({ actors }) => {
  return (
    <div>
      <Navbar />
      <div className={`container mx-auto py-8 ${styles.container}`}>
        <h1 className="text-3xl font-bold mb-4">Actors</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {actors.map(actor => (
            <div key={actor.id} className={`bg-white p-4 rounded shadow-md ${styles.actorCard}`}>
              {/* Use Link instead of <a> */}
              <Link href={`/actor/${actor.id}`}>
                <a>
                  <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} className={`w-full h-40 object-cover mb-4 rounded ${styles.actorImage}`} />
                  <h2 className={`text-xl font-semibold mb-2 ${styles.actorName}`}>{actor.name}</h2>
                  <p className={`text-gray-700 ${styles.actorDescription}`}>{actor.character || 'Unknown'}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorPage;
