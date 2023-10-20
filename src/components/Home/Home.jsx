import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

import css from './Home.module.css';

function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const API_KEY = 'af4a5cbddac880a4b4c654ac364f51a9';

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul className={css.conteiner_movie}>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              {' '}
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}{' '}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Home;
