import React, { useState, useEffect } from 'react';
import getGifs from '../../services/getGifs';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';

export default function SearchResults({ params }){
    const { search } = params;
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);
        getGifs({ search })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
            })
    }, [search])

return <> 
    {loading
        ?<Spinner/>
        :<ListOfGifs gifs={gifs}/>
    } 
</>
}