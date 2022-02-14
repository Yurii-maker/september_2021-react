const baseURLWithToken = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2UwZDQ0NjAyMDNjNjM2OGEyZDc4NDcyZjkxNGYzMCI' +
            'sInN1YiI6IjYwZDBhZThkMTI3Nzc4MDA3NjY5N2EyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.' +
            'dpqEVfP7fkDJTFkmHBL8qZXFf-sn4FjmHTxqIFxaSf4'
    }
};
const urls = {
    photos: (url) => {
        return `https://image.tmdb.org/t/p/w500/${url}`
    },
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    movie: '/movie',
    search: '/search/movie'
};

export {baseURLWithToken, urls}