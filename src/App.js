import {Route, Routes} from "react-router-dom"

import './App.css';
import {Albums, Comments, Layout, Photos, Posts, UserDetails, UserPosts, Users} from "./components/pages";


function App() {


    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':id/photos'} element={<Photos/>}/>
                        </Route>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id/comments'} element={<Comments/>}/>
                    </Route>

                </Route>

            </Routes>

        </div>
    )
        ;
}

export default App;
