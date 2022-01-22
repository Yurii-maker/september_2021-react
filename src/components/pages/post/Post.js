import {Link} from "react-router-dom";

const Post = ({item}) => {
    let {id, title} = item;
    return (
        <div>
            <div>{id}) {title}
                <Link to={`${id}/comments`} state={id}>
                    <button>Comments</button>
                </Link>
                <hr/>
            </div>

        </div>
    );
};

export {Post};