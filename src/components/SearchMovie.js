import { paste } from "@testing-library/user-event/dist/paste";
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
   console.log(searchedResults);
    return (
        <div 
        style={{
            backgroundImage:`url(${'Poster.png'})`
            }} 
        className="search-movie">
        <Header setMovies={setMovies} />
            <div className="container">
       <MovieInfo />
        <div className="cards-container">
            
            {searchedResults}
        
        </div>
            </div>
    </div>
    )
}