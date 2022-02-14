import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    page: 1,
};


const paginationSlice = createSlice({
        name: 'paginationSlice',
        initialState,
        reducers: {
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

            resetPage: (state) => {
                state.page = 1;


            }

        },

    }
)
const paginationReducer = paginationSlice.reducer;

export default paginationReducer;

export const {nextPage, previousPage, resetPage} = paginationSlice.actions