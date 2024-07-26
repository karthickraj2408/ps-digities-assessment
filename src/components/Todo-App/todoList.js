import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../../features/todoSlice';

const TodoList = ({ setCurrentTodo }) => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-none p-0">
      {todos.map(todo => (
        <li key={todo.id} className="flex justify-between items-center border-b p-2">
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
          >
            {todo.text}
          </span>
          <div>
            <button
              onClick={() => setCurrentTodo(todo)}
              className="bg-yellow-500 text-white p-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white p-2"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
