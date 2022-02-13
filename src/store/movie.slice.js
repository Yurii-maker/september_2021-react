import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";


const initialState = {
    movies: [],
    movieDetails: [],
    allGenres: [],
    status: null,
    error: null,
    id: null,
    theme: 'dark',
    page: 1,
    temp: false,
    searchStore: ''

};


const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {

            return await movieService.getAllByPage(page)

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);
const getMovieDetails = createAsyncThunk('movieSlice/getMovieDetails',
    async (id, {rejectWithValue}) => {
        try {
            return await movieService.getSingle(id)
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })
const getAllGenres = createAsyncThunk('movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getGenres()
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);
const getSearchMovie = createAsyncThunk('movieSlice/getSearchMovie',
    async (data, {rejectWithValue}) => {
        try {
            return await movieService.getSearchMovies(data.searchWord)
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);
const searchMoviePagination = createAsyncThunk('movieSlice/searchMoviePagination',
    async ({searchStore, page}, {rejectWithValue}) => {

        try {

            return await movieService.getSearchMovies(searchStore, page)

        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)

const movieSlice = createSlice({
        name: 'movieSlice',
        initialState,
        reducers: {
            changeTheme: (state) => {
                if (state.theme === 'light') {
                    state.theme = 'dark'
                } else if (state.theme === 'dark') {
                    state.theme = 'light'
                }

            },
            nextPage: (state, action) => {
                if (state.page < action.payload) {
                    state.page += 1
                }


            },
            previousPage: (state) => {
                if (state.page < 2) {
                    state.page = 1
                } else {
                    state.page = state.page - 1
                }

            },
            fillSearchStore: (state, action) => {
                state.searchStore = action.payload.searchWord
            },
            reset: (state) => {
                state.page = 1;
                state.temp = false
            }

        },
        extraReducers: {
            [getAllMovies.pending]: (state) => {
                state.status = 'loading'
                state.error = null

            },
            [getAllMovies.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movies = action.payload

            },
            [getAllMovies.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            },
            [getMovieDetails.pending]: (state) => {
                state.status = 'loading'
                state.error = null
            },
            [getMovieDetails.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movieDetails = action.payload

            },
            [getMovieDetails.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            },
            [getAllGenres.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.allGenres = action.payload

            },
            [getAllGenres.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            },
            [getSearchMovie.pending]: (state) => {
                state.status = 'loading'
                state.error = null

            },
            [getSearchMovie.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movies = action.payload
                state.temp = true
            },
            [getSearchMovie.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            },
            [searchMoviePagination.pending]: (state) => {
                state.status = 'loading'
                state.error = null

            },
            [searchMoviePagination.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movies = action.payload


            }, [searchMoviePagination.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            },
        }
    }
)
const movieReducer = movieSlice.reducer;

export default movieReducer;
export {getAllMovies, getMovieDetails, getAllGenres, getSearchMovie, searchMoviePagination};
export const {changeTheme, nextPage, previousPage, fillSearchStore, reset} = movieSlice.actions