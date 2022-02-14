import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {getMovieDetails} from "../../store";
import {urls} from "../../constants";
import './MovieDetails.css';
import StarRating from "../starRating/StarRating";


const MovieDetails = () => {

    const {movieDetails, status, error} = useSelector(state => state['movieReducer']);
    const {theme} = useSelector(state => state['themeReducer']);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {

        dispatch(getMovieDetails(id))

    }, []);

    const {
        original_language,
        original_title,
        overview,
        poster_path,
        genres,
        title,
        homepage,
        release_date,
        vote_average
    } = movieDetails;

    return (
        <div className={theme}>
            <div className={'Wrap'}>
                {status === 'loading' && <h1>LOADING...</h1>}
                {error && <h1>{error}</h1>}
                {movieDetails &&
                <div className={'MovieDetailsWrap'}>
                    <div><img className={'Poster'} src={urls.photos(poster_path)} alt={title}/>
                        <StarRating/></div>
                    <div className={'Info'}><h1>{title}</h1>
                        <h3>Original language: {original_language}</h3>
                        <h3>Original title: {original_title}</h3>
                        {homepage && <h3>Home page: <a href={homepage}>{homepage}</a></h3>}
                        <h3>Release date: {release_date}</h3>
                        <h3>Rating: {vote_average}</h3>
                        <div>Genres:
                            {genres && genres.map((item, i) => <h4 key={i}>-{item.name}</h4>)}</div>
                        <h2>Description: {overview}</h2>

                    </div>

                </div>}
            </div>

        </div>

    );
};

export {MovieDetails};