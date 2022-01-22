const UserPost = ({item: {userId, id, title, body}}) => {
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>title: {title}</div>
            <div>Body: {body} </div>
            <hr/>
        </div>
    );
};

export {UserPost};