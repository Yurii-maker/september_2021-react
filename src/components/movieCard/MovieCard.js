import {Link} from "react-router-dom";

import './MovieCard.css';
import {urls} from "../../constants";


const MovieCard = ({film, genres}) => {

    const {vote_average, poster_path, title, release_date, id, genre_ids} = film;
    const genreNames = [];
    if (film) {
        for (const id of genre_ids) {
            if (genres) {
                for (const genre of genres) {
                    if (id === genre.id) {
                        genreNames.push(genre.name)
                    }
                }

            }
        }
    }

    return (
        <div className={'MovieCardWrap'}>

            <div className={'Wrap'}>{poster_path &&
            <img className={'Cartoon'} src={urls.photos(poster_path)} alt={title}/>}
                <div className={'Title'}>{title}</div>
                <div>Rating: {vote_average}</div>
                <div className={'Genres'}>{genreNames.map((genre, i) => <h4 key={i}>{genre}</h4>)}</div>
                <div className={'Details'}><Link to={`/${id}`}>Show details </Link></div>
                <div className={'Footer'}>Release date: {release_date}</div>
            </div>


        </div>


    );
};

export {MovieCard};