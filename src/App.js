import {useReducer} from "react";

import './App.css';


const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count: state.count + 1};
        case 'dec':
            return {...state, count: state.count - 1};
        case 'reset': {

            return {...state, count: 0}

        }
        case 'x2': {
            return {...state, countX2: state.countX2 * 2}
        }
        case '/2':
            return {...state, countX2: state.countX2 / 2}
        case 'resetTo1':
            return {...state, countX2: 1}
        case 'x100': {
            return {...state, countX100: state.countX100 * 100}
        }
        case '/100':
            return {...state, countX100: state.countX100 / 100}
        case 'resetToOne':
            return {...state, countX100: 1}
        default:
            throw new Error('Error!')
    }

}

function App() {
    const [state, dispatch] = useReducer(reducer, {count: 0, countX2: 1, countX100: 1});


    return (
        <div className="App">
            <div className={'CountWrap'}>
                <h2>Count = {state.count}</h2>
                <button onClick={() => {
                    dispatch({type: 'inc'})
                }}>+
                </button>
                <button onClick={() => {
                    dispatch({type: 'dec'})
                }}>-
                </button>
                <button onClick={() => {
                    dispatch({type: 'reset'})
                }}>reset
                </button>
            </div>
            <div className={'CountWrap'}>
                <h2>Counter X2: {state.countX2}</h2>
                <button onClick={() => {
                    dispatch({type: 'x2'})
                }}>X2
                </button>
                <button onClick={() => {
                    dispatch({type: '/2'})
                }}>/2
                </button>
                <button onClick={() => {
                    dispatch({type: 'resetTo1'})
                }}>reset
                </button>
            </div>
            <div className={'CountWrap'}>
                <h2>Counter X2: {state.countX100}</h2>
                <button onClick={() => {
                    dispatch({type: 'x100'})
                }}>X100
                </button>
                <button onClick={() => {
                    dispatch({type: '/100'})
                }}>/100
                </button>
                <button onClick={() => {
                    dispatch({type: 'resetToOne'})
                }}>reset
                </button>
            </div>


        </div>
    );
}

export default App;
