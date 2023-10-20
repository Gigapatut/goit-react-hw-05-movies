import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import noimages from '../../image/noimages.jfif'

import css from './Cast.module.css';

function Cast() {
  const { movieid } = useParams();
  const [Credits, setCredits] = useState([]);
  const API_KEY = 'af4a5cbddac880a4b4c654ac364f51a9';

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${API_KEY}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCredits(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieid]);

  return (
    <ul className={css.list}>
      {Credits.cast?.map(({ id, character, original_name, profile_path }) => {
        return (
          <li className={css.cart} key={id}>
            {profile_path !== null ? (
              <img
                width={200}
                height={300}
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={original_name}
              />
            ) : (
                <img
                  src={noimages}
                  alt={original_name}
                />
            )}
            <div className={css.conteiner}>
              <h4 className={css.actor}>Actor:{original_name}</h4>
              <p>Character:{character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Cast;
