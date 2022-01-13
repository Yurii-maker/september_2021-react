const UserDetails = ({details: {id, name, username, email, phone, website}, showPosts}) => {
    return (
        <div>
            <h1>{id}. {name}</h1>
            <h2>Username - '{username}', email: '{email}'
                phone: +{phone} and website: '{website}'</h2>
            <button onClick={() => showPosts(id)}>Get Posts</button>
        </div>
    );
};

export default UserDetails;