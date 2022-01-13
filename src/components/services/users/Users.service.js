import {Urls} from "../../configs/Urls";

const getAll = () => {
    return fetch(Urls.users).then(response => response.json())
};
const getOne = (id) => {
    return fetch(Urls.users + id).then(response => response.json())
}
export const usersService = {
    getAll,
    getOne
}