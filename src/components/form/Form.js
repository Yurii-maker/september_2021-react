import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {getSearchMovie, fillSearchStore} from "../../store";
import './Form.css'


const Form = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();


    let search = (data) => {

        if (data.searchWord !== "") {
            dispatch(fillSearchStore(data))
            dispatch(getSearchMovie(data));
            reset()
        }

    };

    return (
        <div>
            <form className={'Form'} onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'enter movie name'} {...register('searchWord')}/>
                <button>SEARCH</button>
            </form>
        </div>
    );
};

export {Form};