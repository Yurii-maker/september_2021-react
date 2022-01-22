import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../../services/posts.service/Posts.service";
import {UserPost} from "../userPost/UserPost";

const UserPosts = () => {
    let {state} = useLocation();

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value.filter(item => item.userId === state.id)))
    }, [])

    return (
        <div>
            {posts.map(item => <UserPost key={item.id} item={item}/>)}
        </div>
    )
};

export {UserPosts};