import axiosService from "../axios.service/Axios.service";

export const albumsService = {
    getAll: () => axiosService.get('albums').then(value => value.data)
}