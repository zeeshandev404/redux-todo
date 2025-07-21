import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../featureTodo/addTodoSlice";

const Todo = () => {
    const todos = useSelector(state => state.todos.todos);  // KEY CHANGE
    const dispatch = useDispatch();

    return (
        <div className="max-w-lg mx-auto mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">
                🌟 Todos are Here!
            </h2>
            <ul className="space-y-3">
                {todos.length === 0 && (
                    <li className="text-gray-400 text-center">No todos yet!</li>
                )}
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-md px-4 py-3 shadow group transition hover:scale-[1.02] duration-150"
                    >
                        <span className="text-lg font-medium text-gray-800">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="ml-4 bg-gradient-to-tr from-red-500 to-pink-400 hover:from-red-600 hover:to-pink-500 text-white p-2 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-300"
                            aria-label="Remove todo"
                            title="Delete"
                        >
                            {/* Trash Icon SVG (Heroicons, or emoji as fallback) */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
