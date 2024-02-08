import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer:{ //can contain multiple reducers
        todoReducer
    }
})

