import {useEffect, useState} from "react";

import {usersService} from "../services/users/Users.service";
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";
import './Users.css';
import getAllPosts from "../services/posts/Posts.service";
import Post from "../post/Post";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [details, setDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        usersService.getAll().then(users => setUsers(users))
    }, []);
    const chooseUser = (id) => {
        usersService.getOne(id).then(details => setDetails(details))

    };
    const showPosts = (id) => {

        getAllPosts().then(item => setPosts(item.filter(item => item.userId === id)))


    }

    return (
        <div className={'Wrap'}>
            <div className={'InfoWrap'}>
                <div>{users.map(value => <User key={value.id} id={value.id} name={value.name}
                                               chooseUser={chooseUser}/>)}</div>
                {details && <UserDetails details={details} showPosts={showPosts}/>}
            </div>
            {posts.map(value => <Post key={value.id} userId={value.userId} id={value.id} title={value.title}
                                      body={value.body}/>)}
        </div>
    );
};

export default Users;