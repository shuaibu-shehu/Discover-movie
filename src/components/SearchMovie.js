import "../styles/SearchMovie.css"
import Header from "./Header.js"
import SearchedMovieCard from "./searchedMovieCard"
import MovieInfo from "./MovieInfo"
import { useState } from "react";


export default function SearchMovie(){
    
    const [movies, setMovies] = useState([]);
    
 
   const searchedResults=movies.map(movie=>{
   return <SearchedMovieCard {...movie} key={movie.id} />
   })
  const [track, setTrack]=useState(''); 
    return (
        <div 
        style={{
            backgroundImage:`url(${'Poster.png'})`
            }} 
        className="search-movie">
        <Header setMovies={setMovies} setTrack={setTrack} />
            <div className="container">
       <MovieInfo />
       {
        track &&
        <div className="cards-container">
            
            {searchedResults}
        
        </div>
        }
            </div>
    </div>
    )
}