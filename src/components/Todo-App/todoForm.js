import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../../features/todoSlice';

const TodoForm = ({ currentTodo, setCurrentTodo }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    } else {
      setText('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return; // Prevent dispatching if the text is empty
    
    if (currentTodo) {
      dispatch(editTodo({ id: currentTodo.id, updatedTodo: { ...currentTodo, text } }));
    } else {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false
      }));
    }
    setText('');
    setCurrentTodo(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        {currentTodo ? 'Edit Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
