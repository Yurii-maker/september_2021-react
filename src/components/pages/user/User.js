import {Link} from "react-router-dom";

import './User.css'

const User = ({item}) => {
    let {id, name} = item;
    return (
        <div className={'UserWrap'}>
            <div className={'Info'}>{id}) {name}</div>
            <Link to={`${id}`} state={{...item}}>
                <button>UserDetails</button>
            </Link>
            <Link to={`${id}/albums`} state={{id}}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export {User};