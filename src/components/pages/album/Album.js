import {Link} from "react-router-dom";

const Album = ({item: {userId, id, title}}) => {
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <Link to={`${id}/photos`} state={{id}}>
                <button>Photos</button>
            </Link>
            <hr/>

        </div>
    );
};

export {Album};