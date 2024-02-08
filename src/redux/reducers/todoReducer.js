import { createSlice } from "@reduxjs/toolkit";
const intialState = {
    todos:[]
};

export const todoSlice  = createSlice({
    name:'todo',
    initialState:intialState,
    reducers:{
        add:(state,action)=>{
            state.todos.push({
                text:action.payload,
                conpleted:false
            })
        },
        toggle:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i===action.payload)
                    {
                        todo.completed=!todo.completed;       
                    }
                return todo;    
            })
        }

    }
})

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;