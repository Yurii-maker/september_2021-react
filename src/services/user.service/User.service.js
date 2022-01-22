import axiosService from "../axios.service/Axios.service";


export const userService = {
    getAll: () => axiosService.get('/users').then(value => value.data)
}