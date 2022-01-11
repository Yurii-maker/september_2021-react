import {useEffect, useState} from "react";

import User from "../user/User";

function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
            setUsers(users)
        })
    }, [])
    return (
        <div>{users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username}
                                       email={value.email}/>
        )}</div>
    )


}

export default Users;