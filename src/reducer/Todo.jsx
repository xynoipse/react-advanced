import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case 'toggle-todo':
      return {
        todos: state.todos.map((todo, idx) =>
          idx === action.idx ? { ...todo, completed: !todo.completed } : todo
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}

const Counter = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'add-todo', text });
          setText('');
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div>todo count: {todoCount}</div>
      {todos.map((todo, idx) => (
        <div
          key={todo.text}
          onClick={() => dispatch({ type: 'toggle-todo', idx })}
          style={{ textDecoration: todo.completed ? 'line-through' : '' }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default Counter;
