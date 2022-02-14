import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";


const initialState = {
    movies: [],
    movieDetails: [],
    temp: false,
    searchStore: '',
    status: null,
    error: null


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
    });

const getSearchMovie = createAsyncThunk('movieSlice/getSearchMovie',
    async (data, {rejectWithValue}) => {
        try {
            return await movieService.getSearchMovies(data.searchWord)
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);
const foundMoviesStore = createAsyncThunk('movieSlice/foundMoviesStore',
    async ({searchStore, page}) => {

        try {

            return await movieService.getSearchMovies(searchStore, page)

        } catch (e) {

        }

    }
)


const movieSlice = createSlice({
        name: 'movieSlice',
        initialState,
        reducers: {
            fillSearchStore: (state, action) => {
                state.searchStore = action.payload.searchWord
            },
            resetTemp: (state) => {
                state.temp = false;


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

            [foundMoviesStore.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.movies = action.payload


            }


        }
    }
)
const movieReducer = movieSlice.reducer;

export default movieReducer;
export {getAllMovies, getMovieDetails, getSearchMovie, foundMoviesStore};
export const {fillSearchStore, resetTemp} = movieSlice.actions