import { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import css from './Movies.module.css';

function Movies() {
  const [searchValue, setSearchValue] = useState([]);
  const [search, setSearch] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const currentQuery = searchParams.get('q');
  useEffect(() => {
    if (!currentQuery) {
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=af4a5cbddac880a4b4c654ac364f51a9',
      params: {
        query: `${currentQuery}`,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer af4a5cbddac880a4b4c654ac364f51a9',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSearchValue(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const hendleSabmit = e => {
    e.preventDefault();
    setSearch(true);

    if (currentQuery === '') {
      Notiflix.Notify.failure('please writing value ');
    }

    setTimeout(() => {
      setSearch(false);
    }, 500);
  };
  const updateQueryString = e => {
    if (e.currentTarget.value.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ q: e.currentTarget.value.toLowerCase() });
  };
  const movie = searchValue.results;
  return (
    <>
      <form onSubmit={hendleSabmit} className={css.form}>
        <input
          onChange={updateQueryString}
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <ul className={css.conteiner_movie}>
        {movie !== null &&
          movie?.map(({ id, original_title }) => {
            return (
              <li key={id}>
                {' '}
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  {original_title}{' '}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
export default Movies;