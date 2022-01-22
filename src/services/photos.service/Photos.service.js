import axiosService from "../axios.service/Axios.service";

export const photosService =
    {
        getAll: () => axiosService.get('/photos').then(value => value.data)
    }