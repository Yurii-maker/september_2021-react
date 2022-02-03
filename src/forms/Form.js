import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addTodo} from "../store/todoSlice";
import "./Form.css"


const Form = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addTodo({data}));
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={"Wrap"}>
            <input type="text" {...register('todo')} />

            <button>save</button>

        </form>
    );
};

export default Form;