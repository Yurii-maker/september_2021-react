const User = ({id, name, username, email}) => {
    return (
        <div>
            {id}. NAME - {name}, USERNAME - {username}, EMAIL: '{email}'
        </div>
    );
};

export default User;