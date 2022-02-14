import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAllByPage: (pageNumber) => {
        return axiosService.get(`${urls.movies}?page=${pageNumber}`).then(value => value.data)
    },
    getSingle: (id) => {
        return axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
    },
    getGenres: () => {
        return axiosService.get(urls.genres).then(value => value.data)
    },
    getSearchMovies: (movieName, page) => {
        return axiosService.get(`${urls.search}?query=${movieName}&page=${page}`).then(value => value.data)
    },

};

export {movieService}
