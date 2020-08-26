import React from 'react';
import './Gif.css'
import { Link } from 'wouter';

export default function Gif ({title, id, url}){
    return (
        <div className='Gif'>
            <Link to={`#${id}`}>
                <h4>{title}</h4>
                <img src={url} alt={title} id={id} />
            </Link> 
        </div>
    )
}