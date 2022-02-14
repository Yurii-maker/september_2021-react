import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";


const initialState = {
    allGenres: []
};


const getAllGenres = createAsyncThunk('genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getGenres()
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);


const genreSlice = createSlice({
        name: 'genreSlice',
        initialState,
        reducers: {},
        extraReducers: {

            [getAllGenres.fulfilled]: (state, action) => {
                state.allGenres = action.payload
            }

        }
    }
)
const genreReducer = genreSlice.reducer;

export default genreReducer;
export {getAllGenres};
