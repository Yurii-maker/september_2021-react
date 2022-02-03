import {useSelector} from "react-redux";

import Todo from "../todo/Todo";


const Todos = () => {

    const {todos} = useSelector(state => state.todoReducer);

    return (
        <div className={'TodosWrap'}>
            {todos.map(item => <Todo key={item.id} item={item}/>)}
        </div>

    );
};

export default Todos;