import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

import getGifs from '../../services/getGifs';
import './home.css';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';

const POPULAR_GIFS = ['Billie Eilish', 'Ariana Grande', 'Selena Gomes', 'Maduro Memes'];

export default function Home(){
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  /* <--------------------------------> */
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
      setLoading(true);
      getGifs({ keyword })
          .then(gifs => {
              setGifs(gifs);
              setLoading(false);
          })
  }, [keyword])
  /* <--------------------------------> */
  

  const handleChange = evt => {
    setKeyword(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    pushLocation(`search/${keyword}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
      </form>
      <h3 className='App-title'>Ultima busqueda</h3>
      <ListOfGifs gifs={gifs}/>
      <h3 className='App-title'>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>                
        ))}
      </ul>
    </>
  )
}