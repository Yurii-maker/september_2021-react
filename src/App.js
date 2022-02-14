import './App.css';
import {ErrorPage, Footer, HomePage, MoviesList} from "./components";
import {Route, Routes} from "react-router-dom";
import {MovieDetails} from "./components";
import {Header} from "./components";


function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={'/allMovies'} element={<MoviesList/>}/>
                <Route path={'/:id'} element={<MovieDetails/>}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
