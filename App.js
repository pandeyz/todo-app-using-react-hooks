import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  // To hold the state of form element and function that update it
  const [value, setValue] = useState("");

  // Form submit handler
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    // Call the function to add this new todo value
    addTodo(value);

    // Reset the form state by calling its associated function
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function App() {
	// Initial state
	let todoList = ['Wake up early'];

	// Hooks
	const [todos, setTodos] = useState(todoList);

    const addTodo = text => {
        const newTodos = [...todos, text];
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

  	return (
	    <div style={{margin: 20}}>
	    	<h4>To Do - Using React Hooks</h4>
	      	<TodoForm addTodo={addTodo} />

	      	<hr />
	      	<h4>To Do - List</h4>
	      	<ul>
	      	{
	      		( todos.length > 0 )
	      		?
	      			todos.map((todo, index) => <li key={index}>{todo} <button onClick={(() => removeTodo(index))}>x</button></li>)
	      		: 
	      		<li>Your todo list is empty!</li>
	      	}
	      	</ul>
	    </div>
  	);
}

export default App;