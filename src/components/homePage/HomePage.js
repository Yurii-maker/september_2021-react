import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {changeBg, resetPage, resetTemp} from "../../store";
import './HomePage.css'


const HomePage = () => {
    const {theme, bg} = useSelector(state => state['themeReducer']);
    const dispatch = useDispatch();
    dispatch(resetPage());
    dispatch(resetTemp());
    dispatch(changeBg(theme));

    return (

        <div className={`${theme} PaddingNull`}>
            <div className={'Header'}>
                <div className={`WelcomeWrap ${bg}`}><h2>WELCOME. Millions of movies, TV shows and people to discover.
                    Explore
                    now.</h2>
                    <Link to={'/allMovies'}><span className={'AllMovies'}>Start and show movies</span></Link></div>
            </div>

        </div>

    );
};

export {HomePage};