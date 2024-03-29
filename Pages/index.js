import React, { useState } from 'react';
import NavBar from '/Components/navbar'
import SearchBar from '/Components/SearchBar/SearchBar';
import '/src/app/globals.css';

const HomePage = ({ movies: initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies);

  const handleSearch = (searchTerm) => {
    const filteredMovies = initialMovies.filter(movie =>
      movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMovies(filteredMovies);
  };
  

  return (
    <div>
      <NavBar />
      <div className="container mx-auto py-8">
        <SearchBar onSearch={handleSearch} />
        <h1 className="text-3xl font-bold mb-4">Welcome to Straw Hats</h1>
        <p className="text-lg text-gray-700 mb-6">Discover the latest movies, explore top-rated TV series, and read reviews from fellow movie enthusiasts.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Trending and Hot</button>

        {/* Display fetched movies if available */}
        {movies && movies.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map(movie => (
              <div key={movie.id} className="bg-white rounded-3xl shadow-xl">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-60 object-cover rounded-t-3xl"
                  />
                ) : (
                  <div className="w-full h-60 bg-gray-300 rounded-t-3xl"></div> 
                )}
                <div className="p-6">
                  <a href={movie.link} className="font-bold text-xl line-clamp-2 hover:text-cyan-700">
                    {movie.title}
                  </a>
                  <span className="text-slate-400 pt-2 font-semibold">
                    ({movie.year})
                  </span>
                  <p className="text-gray-700 py-2 line-clamp-4">{movie.overview}</p>
                  <div className="flex justify-between">
                    <div className="font-black">
                      <span className="text-yellow-500 text-lg">IMDB SCORE</span>
                      <span className="text-2xl flex items-center gap-x-1 text-yellow-600">
                        {movie.imdb_score}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.                      42868 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#eab308"/>
                        </svg>
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="h-7" />
                      <span className="text-3xl font-bold text-slate-300">
                        #{movie.rank}
                      </span>
                    </div>
                  </div>
                </div>
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
