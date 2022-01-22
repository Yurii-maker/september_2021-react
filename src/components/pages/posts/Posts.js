import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../../services/posts.service/Posts.service";
import {Post} from "../post/Post";
import './Posts.css'


const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'Wrap'}>

            <div className={"Info"}>{posts.map(item => <Post key={item.id} item={item}/>)}</div>
            <div className={"Info"}><Outlet/></div>

        </div>
    );
};

export {Posts};