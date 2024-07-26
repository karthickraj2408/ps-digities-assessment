import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './todoForm';
import TodoList from './todoList';

const ToDo = () => {
  const [currentTodo, setCurrentTodo] = useState(null);
  const todos = useSelector(state => state.todos);
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="w-1/2 mx-auto p-4  ">
      <h1 className="text-2xl mb-4">Todo List</h1>
      <p className="mb-4">Completed Tasks: {completedCount}</p>
      <TodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
      <TodoList setCurrentTodo={setCurrentTodo} />
    </div>
  );
};

export default ToDo;
