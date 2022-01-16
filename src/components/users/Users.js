import User from "../user/User";


const Users = ({users}) => {

    return (
        <div>
            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username}
                                      email={value.email}/>)}
        </div>
    );
};

export default Users;