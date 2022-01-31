import {useReducer, useRef} from "react";

import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'saveCat':
            return {...state, cats: [...state.cats, action.payload]};
        case 'saveDog':
            return {...state, dogs: [...state.dogs, action.payload]};
        case 'deleteCat':
            return {...state, cats: state.cats.filter(item => item.id !== action.payload)};
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(item => item.id !== action.payload)};
        default:
            return state
    }
}

function App() {
    const catInput = useRef();
    const dogInput = useRef();
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});


    let cat = {
        id: new Date().getTime(),
        name: ''
    };
    let dog = {
        id: new Date().getTime(),
        name: ''
    };

    let catFormHandler = (e) => {
        cat.name = e.target.value

    };
    let dogFormHandler = (e) => {
        dog.name = e.target.value
    };
    let addCat = (e) => {
        e.preventDefault();
        if (!cat.name) {
            alert('empty field')
            return
        }
        dispatch({type: 'saveCat', payload: cat});

        catInput.current.value = ''
    };

    let addDog = (e) => {
        e.preventDefault();
        if (!dog.name) {
            alert('empty field')
            return
        }
        dispatch({type: 'saveDog', payload: dog});

        dogInput.current.value = ''
    };


    let delCat = (id) => {
        dispatch({type: 'deleteCat', payload: id});

    };
    let delDog = (id) => {
        dispatch({type: 'deleteDog', payload: id});

    };
    return (
        <div>
            <div className="Forms">
                <form onSubmit={addCat}>
                    Add Cat<input type="text" ref={catInput} name={'cat'} onChange={catFormHandler}/>
                    <button>Save
                    </button>
                </form>
                <form onSubmit={addDog}>
                    Add Dog<input type="text" ref={dogInput} name={'dog'} onChange={dogFormHandler}/>
                    <button>Save
                    </button>
                </form>
            </div>
            <hr/>
            <div className={'Animals'}><Cats cats={state.cats} delCat={delCat}/>
                <Dogs dogs={state.dogs} delDog={delDog}/></div>
        </div>
    );
}

export default App;
