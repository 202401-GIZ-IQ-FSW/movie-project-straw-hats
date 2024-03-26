import React from 'react';
import Navbar from '/components/Navbar';
import '/src/app/global.css'

const HomePage = ({ movies }) => {
  return (
    <div>q
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Straw Hats</h1>
        <p className="text-lg text-gray-700 mb-6">Discover the latest movies, explore top-rated TV series, and read reviews from fellow movie enthusiasts.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Bring me your best</button>

        {/* Display fetched movies if available */}
        {movies && movies.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map(movie => (
              <div key={movie.id} className="bg-white p-4 rounded shadow-md">
                {movie.poster_path ? (
                  <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full h-40 object-cover mb-4 rounded" />
                ) : (
                  <div className="w-full h-40 bg-gray-300 mb-4 rounded"></div> // Placeholder for missing posters
                )}
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-700">{movie.overview}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};



export async function getServerSideProps() {
  try {
    // Fetch data from an external API
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=dab11bb1b0e0ea35a5fd7a3a44dd8f1c`);
    const data = await res.json();

    // Check if data is available
    const movies = data.results || []; // Use an empty array as default value if data.results is undefined

    // Pass data to the page via props
    return { props: { movies } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { movies: [] } }; // Return an empty array in case of error
  }
}



export default HomePage;
