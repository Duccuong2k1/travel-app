import { combineReducers } from "@reduxjs/toolkit";
import demoSlice from '../slice/appSlice/demoSlice';


export const rootReducer = combineReducers({
    demoSlice
});
export type RootState = ReturnType<typeof rootReducer>;