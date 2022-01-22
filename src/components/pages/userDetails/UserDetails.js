import {Link, Outlet, useLocation} from "react-router-dom";

import './UserDetails.css'


const UserDetails = () => {
    let {state} = useLocation();

    return (
        <div className={'DetailsWrap'}>
            <div>
                <div>ID: {state.id}</div>
                <div>Name: {state.name}</div>
                <div>Username: {state.username}</div>
                <div>Email: {state.email}</div>
            </div>
            <Link to={`posts`} state={state}>
                <button>Posts</button>
            </Link>
            <Outlet/>
        </div>

    )


};

export {UserDetails};