import React, {useEffect, useState} from 'react';
import Gif from '../Gif/Gif';
import './list.css';

export default function ListOfGifs({ gifs }){

    return <div className="ListOfGifs">
    {
        gifs.map(({title, id, url}) =>
            <Gif key={id} title={title} url={url} id={id} />
        )
    }
    </div>
}