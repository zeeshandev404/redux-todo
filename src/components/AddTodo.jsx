import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../featureTodo/addTodoSlice";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function todoHandler(e){
        e.preventDefault();             // FIXED TYPO
        if (!input.trim()) return;      // Optional: prevent empty todos
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <form
            onSubmit={todoHandler}
            className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4 max-w-md mx-auto"
        >
            <input
                type="text"
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold rounded-md px-6 py-2 transition duration-100 shadow-md"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
