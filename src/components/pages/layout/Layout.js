import {NavLink, Outlet} from "react-router-dom";

import './Layout.css'

const Layout = () => {
    return (
        <div>
            <div className={'layoutWrap'}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div><Outlet/></div>
        </div>

    );
};

export {Layout};