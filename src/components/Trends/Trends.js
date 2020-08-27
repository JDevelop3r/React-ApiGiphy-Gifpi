import React from 'react';
import { Link } from 'wouter';

import './styles.css';

export default function Trends(){
    const POPULAR_GIFS = ['Billie Eilish', 'Ariana Grande', 'Selena Gomes', 'Maduro Memes'];

    return <>
        <h3 className='App-title'>Los gifs más populares</h3>
        <ul>
            {POPULAR_GIFS.map((popularGif) => (
              <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
              </li>                
            ))}
          </ul>
    </>
}