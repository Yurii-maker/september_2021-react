import {useEffect, useState} from "react";
import Post from "../post/Post";

function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {
            setPosts(posts)
        })
    }, [])
    return (
        <div>
            {posts.map(value => <Post key={value.id} userId={value.userId} id={value.id} title={value.title}
                                      body={value.body}/>)}
        </div>
    )
}

export default Posts