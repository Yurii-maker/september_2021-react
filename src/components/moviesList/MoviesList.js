import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import './MoviesList.css'
import {
    getAllGenres,
    getAllMovies,
    nextPage,
    previousPage,
    foundMoviesStore
} from "../../store";
import {MovieCard} from "../movieCard/MovieCard";
import {Form} from "../form/Form";


const MoviesList = () => {
    const {
        movies,
        status,
        error,
        searchStore,
        temp
    } = useSelector(state => state['movieReducer']);
    const {allGenres} = useSelector(state => state['genreReducer']);
    const {page} = useSelector(state => state['paginationReducer']);
    const {theme} = useSelector(state => state['themeReducer']);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!temp) {
            dispatch(getAllMovies(page))
            dispatch(getAllGenres())
        }


        if (temp) {
            dispatch(foundMoviesStore({searchStore, page}))
            dispatch(getAllGenres())


        }

    }, [page]);
    const {results: films, total_pages} = movies;


    const {genres} = allGenres;

    return (

        <div>
            <div className={'SearchField'}><Form/></div>
            <div className={theme}>
                {status === 'loading' && <h1>LOADING...</h1>}
                {error && <h1>{error}</h1>}

                {films && films.map(film => <MovieCard key={film.id} film={film} genres={genres}/>)}
                <div className={'Btns'}>
                    <button className={'Btn'} onClick={() => {
                        dispatch(previousPage())
                    }}>previous
                    </button>
                    <button className={'Btn'} onClick={() => {
                        dispatch(nextPage(total_pages))
                    }}>next
                    </button>
                </div>

            </div>
        </div>


    );
};

export {MoviesList};