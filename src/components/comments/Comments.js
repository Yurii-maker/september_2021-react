import {useEffect, useState} from "react";

import Comment from "../comment/Comment";


function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json().then(comments => setComments(comments)))
    }, [])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} postId={value.postId} id={value.id} name={value.name}
                                            email={value.email} body={value.body}/>)}
        </div>

    )

}

export default Comments