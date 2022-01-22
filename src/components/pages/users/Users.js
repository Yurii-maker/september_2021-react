import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../../services/user.service/User.service";
import {User} from "../user/User";
import './Users.css'


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])


    return (
        <div className={'UsersWrap'}>
            <div>{users.map(item => <User key={item.id} item={item}/>)}</div>
            <div className={"Outlet"}><Outlet/></div>
        </div>

    );
};

export {Users};