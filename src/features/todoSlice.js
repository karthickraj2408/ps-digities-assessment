import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(sessionStorage.getItem('todos')) || [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      sessionStorage.setItem('todos', JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        sessionStorage.setItem('todos', JSON.stringify(state));
      }
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state[index] = updatedTodo;
        sessionStorage.setItem('todos', JSON.stringify(state));
      }
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
        sessionStorage.setItem('todos', JSON.stringify(state));
      }
    }
  }
});

export const { addTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
