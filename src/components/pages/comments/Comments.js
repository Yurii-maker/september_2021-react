import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {commentsService} from "../../../services/comments.service/Comments.service";
import {Comment} from "../comment/Comment";

const Comments = () => {
    let location = useLocation();
    let {state: id} = location;
    let [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.filter(item => item.postId === id)))

    }, [id])

    return (
        <div>
            {comments.map(item => <Comment key={item.id} item={item}/>)}
        </div>
    );
};

export {Comments};