import {useDispatch} from "react-redux";

import {checkedTodo, deleteTodo} from "../../store/todoSlice";
import './Todo.css'

const Todo = ({item: {todo, id, status}}) => {

    const dispatch = useDispatch();


    return (
        <div className={'Wrap'}>
            <input type="checkbox" value={status} onChange={() => {
                dispatch(checkedTodo({id}))
            }}/>
            <h2 className={status ? 'Checked' : ''}>{todo}</h2>
            <button onClick={() => {
                dispatch(deleteTodo({id}))
            }}>Delete
            </button>
        </div>
    );
};

export default Todo;