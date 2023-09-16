import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "../styles/SingleMovie.css"



export default function SingleMovie(){

    const [movie, setMovie] = useState(null);

    const {id}=useParams();
  
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=732e7e4c2148b94995d37bb75b1b2aa9`;

    useEffect(() => {
     axios.get(url) 
        .then(res=>setMovie(res.data))
        .catch(err=>console.log(err));
    }, [id]);
    
  if(!movie){
    return (
        <div>
        <p>Movie Not Found</p> <Link to="/">Back to home</Link>
        </div>
    )
}
const releaseDate = new Date(movie.release_date).toLocaleDateString(undefined, {
    timeZone: 'UTC',
  });
  
    return (
         <div className='single-movie-container'>
            <h2 >Movies Detail</h2>
            <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}/>
            <h3 data-testid="movie-title">{movie.title}</h3>
            <p data-testid="movie-release-date">{releaseDate}</p>
            <h4 data-testis="movie-runtime">{movie.runtime}</h4>
            <p data-testid="movie-overview">{movie.overview}</p>
            <Link to="/">Back to home</Link>
         </div>
    )
}