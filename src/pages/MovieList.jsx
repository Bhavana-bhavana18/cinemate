import { Card } from '../Components/Card';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const MovieList = ({ apiPath }) => {
  //  const { data: movies } = useFetch(apiPath);
  // useTitle(title);]
  const {data} = useFetch(apiPath);
  const movies = Array.isArray(data) ? data : [];
  // title logic for different apiPath values
  const pageTitle = useTitle(apiPath === 'movie/now_playing' ? 'Now Playing' : apiPath === 'movie/popular' ? 'Popular Movies' : apiPath === 'movie/top_rated' ? 'Top Rated Movies' : apiPath === 'movie/upcoming' ? 'Upcoming Movies' : '');

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      

      </section>
    </main>
  )
}
