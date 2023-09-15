import "../styles/searchedMovieCard.css"

export default function SearchedMovieCard(props){

    return (
        <div className="card"
        data-testid=" movie-card"
        >
            <img
            data-testid=" movie-poster"

            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}/>
            <p 
            data-testid="movie-title"
            className="release-date">{props.release_date}</p>
            <p 
            data-testid="movie-title"
            className="movie-title">{props.title}</p>

        </div>
        )
}