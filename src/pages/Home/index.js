import React, { useState } from 'react';
import { useLocation } from 'wouter';

import './home.css';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import useGifs from '../../hooks/useGifs';
import Trends from '../../components/Trends/Trends';


export default function Home(){
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const { gifs } = useGifs();
  
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
      <div className="Gifs">
        <div>
          <h3 className='App-title'>Ultima busqueda</h3>
          <ListOfGifs gifs={gifs}/>
        </div>
        <div>
          <Trends />
        </div>
      </div>
    </>
  )
}