import './User.css'
const User = ({id, name, chooseUser}) => {
    return (
        <div className={'UserWrap'}>
            {id} - {name}
            <button onClick={() => chooseUser(id)}>Get Details</button>
        </div>
    );
};

export default User;