import {Urls} from "../../configs/Urls";

const getAllPosts = () => {
    return fetch(Urls.posts).then(response => response.json())
}
export default getAllPosts