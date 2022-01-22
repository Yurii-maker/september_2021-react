import axiosService from "../axios.service/Axios.service";

export const commentsService =
    {
        getAll: () => axiosService.get('/comments').then(value => value.data)
    }