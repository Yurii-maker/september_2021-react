import './App.css';
import Form from "./forms/Form";
import Todos from "./components/todos/Todos";

function App() {
    return (
        <div className="App">
            <Form/>
            <hr/>
            <Todos/>
        </div>
    );
}

export default App;
