import "../styles/FeaturedCard.css"
export default function FeaturedCard(props){
    // console.log(props.title);
    return (
        <div className="featuredcard"
        data-testid=" movie-card"
        >
            <img
            data-testid=" movie-poste"

            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}/>
            <p 
            data-testid="movie-title"
            className="release-date">{props.release_date}</p>
            <p 
            data-testid="movie-title"
            className="movie-title">
               <b>
                {props.title}
                </b> 
                </p>

        </div>
    )
}