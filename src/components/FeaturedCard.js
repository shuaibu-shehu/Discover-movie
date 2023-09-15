import "../styles/FeaturedCard.css"
export default function FeaturedCard(props){
    let isFav=false;
    // console.log(props.title);
    function addTofav(e){
        if(isFav){
            
            e.target.style.color='#323232';
            isFav=false;
        } else{
            e.target.style.color='#aebfc6ac';
            isFav=true; 
        }
       
    }
    return (
        <div className="featuredcard"
        data-testid=" movie-card"
        >
            <img
            data-testid=" movie-poste"

            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}/>
            <ion-icon name="star"
            onClick={addTofav}
            ></ion-icon>
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