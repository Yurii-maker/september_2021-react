const Post = ({userId, id, title, body}) => {
    return (
        <div>
            UserId = {userId}. ID - {id} title:'{title}', body:'{body}'
        </div>
    );
};

export default Post;