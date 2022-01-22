import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {photosService} from "../../../services/photos.service/Photos.service";
import {Photo} from "../photo/Photo";

const Photos = () => {

    let {state} = useLocation()
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getAll().then(value => setPhotos(value.filter(value => value.albumId === state.id)))
    }, [state.id])

    return (
        <div>
            {photos.map(item => <Photo key={item.id} item={item}/>)}
        </div>
    );
};

export {Photos};