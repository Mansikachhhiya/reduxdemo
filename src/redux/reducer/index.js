import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
 const addTodoReducer= createSlice({
     name: "todos",
     initialState,
     reducers:{
         // Add todos
         addTodos: (state,action) =>{
             state.push(action.payload);
             return state;
         },
         //Remove todos
         removeTodos:(state,action)=>{
             return
         }
     },
 });

export const { addTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
