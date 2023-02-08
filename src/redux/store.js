import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postReducer, userReducer} from "./slices";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    cars: carReducer
})

const setupStore = ()=> configureStore({
    reducer: rootReducer
})

export {
    setupStore
}