import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {reset} from "../../store";
import './HomePage.css'


const HomePage = () => {
    const {theme} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    dispatch(reset())
    let bg = ''

    if (theme === 'dark') {
        bg = 'Bg'
    }

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