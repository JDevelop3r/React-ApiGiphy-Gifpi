import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

import './styles.css';
import getTrendingTerms from '../../services/getTrendingTerms';

export default function Trends(){
    const [trends, setTrends] = useState([]);

    useEffect(function () {
      getTrendingTerms()
        .then(setTrends);
    }, [])

    return <>
        <h3 className='App-title'>Tendencias</h3>
        <ul>
            {trends.map((popularGif) => (
              <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
              </li>                
            ))}
          </ul>
    </>
}