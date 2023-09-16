import SearchMovie from "./SearchMovie";
import "../styles/homepage.css";
import { useState } from "react";
import { useEffect } from "react";
import FeaturedCard from "./Movies";
import SingleMovie from "./SingleMovie";
// import { Link } from "react-router-dom";

export default function Homepage() {
  
  const [movies, setMovies] = useState([]);

  const getTopMovies = async () => {

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=732e7e4c2148b94995d37bb75b1b2aa9`;

    try{

      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }catch(err){alert('error fetching '+ err)}
  };

  useEffect(() => {
    getTopMovies();
  }, []);

 
  
  let topMovies=movies.map((movie,index)=>{
    return <FeaturedCard {...movie} key={movie.id} />
  })
  let topTen=topMovies.slice(0,10);
  
  return (
    <div className="homepage">
     
      <SearchMovie  />

      <div className="featured-container"> 
      <h1>TOP TEN</h1>  
      <div className="top-ten-grid">
          {topTen}
      </div>
     
      </div>
     
    </div>
  );
}
