import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    theme: 'dark',
    bg: ''
};


const themeSlice = createSlice({
        name: 'themeSlice',
        initialState,
        reducers: {
            changeTheme: (state) => {
                if (state.theme === 'light') {
                    state.theme = 'dark'
                } else if (state.theme === 'dark') {
                    state.theme = 'light'
                }
            },
            changeBg: (state, action) => {

                if (action.payload === 'dark') {
                    state.bg = 'Bg'
                }
                if (action.payload === 'light') {
                    state.bg = ''
                }
            }

        }

    }
)
const themeReducer = themeSlice.reducer;

export default themeReducer;

export const {changeTheme, changeBg} = themeSlice.actions