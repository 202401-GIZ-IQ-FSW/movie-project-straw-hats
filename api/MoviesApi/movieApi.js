// movieApi.js

export async function fetchTrendingMovies() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=dab11bb1b0e0ea35a5fd7a3a44dd8f1c`);
      const data = await res.json();
      return data.results || [];
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  }
  
  export async function searchMovies(query) {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=dab11bb1b0e0ea35a5fd7a3a44dd8f1c&query=${query}`);
      const data = await res.json();
      return data.results || [];
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  }
  