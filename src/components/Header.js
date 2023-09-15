import "../styles/Header.css"
import { useState } from "react";


export default function Header({setMovies}){
  
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
            // console.log(data.results);
        }catch(err){
            console.error(err);
        }
    }

  return (  <div className="header">
        <div className="tv-icon-container">
        <img src="tv.png" />
        <p>MovieBox</p>
        </div>
        <div className="search-field-container">
        <input type="text"
        
        value={query} 
        
        onChange={(e) => {
          setQuery(e.target.value)
          searchMovies(e);
        }}
        />
        <ion-icon className="search-icon" name="search"></ion-icon>
        </div>
        <div className="sign-in">
            <button>Sign in</button>
            <ion-icon name="menu"></ion-icon>
        </div>
    </div>
  )
}