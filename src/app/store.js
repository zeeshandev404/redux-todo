import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../featureTodo/addTodoSlice'

const store = configureStore({
    reducer: {                       
        todos: todoReducer
    }
});

export default store;
