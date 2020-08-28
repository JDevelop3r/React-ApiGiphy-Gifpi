import React from 'react';

import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';
import Trends from '../../components/Trends/Trends';
import useGifs from '../../hooks/useGifs';

export default function SearchResults({ params }){
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });
    /*  = keyword.filter(l => l != '%' && l != '2' && l != '0') */
    return <> 
        {loading
            ?<Spinner/>
            :(<div className="Gifs">
                <div>
                    <h3 className='App-title'>{ decodeURI(keyword.toUpperCase()) }</h3>
                    <ListOfGifs gifs={gifs}/>
                </div>
                <div>
                    <Trends />
                </div>
            </div>)
        }  
    </>
}