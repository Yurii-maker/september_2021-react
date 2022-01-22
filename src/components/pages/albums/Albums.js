import {Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {albumsService} from "../../../services/albums.service/Album.service";
import {Album} from "../album/Album";

const Albums = () => {

    let {state} = useLocation();

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(value => setAlbums(value.filter(item => item.userId === state.id)))
    },[])

    return (
        <div>
            <div>{albums.map(item => <Album key={item.id} item={item}/>)}</div>
            <Outlet/>
        </div>

    )
};

export {Albums};