import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {changeTheme} from "../../store";
import './Header.css'

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className={'HeaderWrap'}>
            <Link to={'/'}>Home</Link>
            <h1>All world movies</h1>
            <div className={'RightContainer'}>
                <img src="http://www.insertitle.com/images/tmdb-logo.png" alt="logo"/>
                <button onClick={() => {
                    dispatch(changeTheme())
                }}>dark/light theme
                </button>
            </div>
        </div>
    );
};

export {Header};