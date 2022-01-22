import axiosService from "../axios.service/Axios.service";

export const postService =
    {
        getAll: () => axiosService.get('/posts').then(value => value.data)

    }