import {createSlice} from "@reduxjs/toolkit";

const initialState = {todos: []};
const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: new Date().getTime(),
                ...action.payload.data,
                status: false
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },
        checkedTodo: (state, action) => {
            const found = state.todos.find(todo => todo.id === action.payload.id)
            found.status = !found.status
        }
    }
})

const todoReducer = todoSlice.reducer;
export const {addTodo, deleteTodo, checkedTodo} = todoSlice.actions;
export default todoReducer