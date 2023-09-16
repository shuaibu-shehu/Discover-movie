import { Link, useParams } from 'react-router-dom';
export default function SingleMovie(props){
    console.log(props);
    
const {id}=useParams();
    
    return (
        <>
         <div>movie id :{id}</div>
         <Link to="/">Back to home</Link>
        </>
    )
}