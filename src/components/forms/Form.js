import {useEffect, useState} from "react";

import UsersService from "../../services/Users.service";
import Users from "../users/Users";

const Form = () => {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UsersService().then(value => setUsers(value))
    }, [])

    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

    };

    function filter(e) {
        e.preventDefault();
        let filteredArray = [...users];
        if (form.name) {
            filteredArray = filteredArray.filter(user => user.name.toLowerCase().includes(form.name.toLowerCase()))
        }
        if (form.username) {
            filteredArray = filteredArray.filter(user => user.username.toLowerCase().includes(form.username.toLowerCase()))
        }
        if (form.email) {
            filteredArray = filteredArray.filter(user => user.email.toLowerCase().includes(form.email.toLowerCase()))
        }
        setUsers(filteredArray)

    }

    return (
        <div>
            <form onSubmit={filter}>
                <label>Name: <input type="text" name={'name'} onChange={formHandler}/></label>
                <label>Username: <input type="text" name={'username'} onChange={formHandler}/></label>
                <label>Email: <input type="text" name={'email'} onChange={formHandler}/>></label>
                <button>Filter</button>
            </form>
            <Users users={users}/>
        </div>
    );
};

export default Form;