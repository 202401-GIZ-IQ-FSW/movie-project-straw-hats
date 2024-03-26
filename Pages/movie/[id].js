import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; 
import MovieDetails from '../components/MovieDetails'; 
import { getMovieDetailsById } from '/api/MoviesApi/movieApi.js';

const MoviePage = ({ movie }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <MovieDetails movie={movie} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const movie = await getMovieDetailsById(id);

    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {
      props: {
        movie: {},
      },
    };
  }
}

export default MoviePage;
