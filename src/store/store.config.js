import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice";
import paginationReducer from "./pagination.slice";
import themeReducer from "./theme.slice";

const store = configureStore({
    reducer: {
        movieReducer,
        genreReducer,
        paginationReducer,
        themeReducer
    }

});

export default store