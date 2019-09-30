import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		todos: [ 'First Item', 'Second Item' ],
		inputValue: ''
	};
	//the only thing this should handle  is actually the todo state
	handleCreateTodo = (todo) => {
		this.setState({
			todos: [ todo, ...this.state.todos ]
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.handleCreateTodo(this.state.inputValue);
		this.setState({
			inputValue: ''
		});
		//call our state updater here
	};

	handleOnChange = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	};
	render() {
		const renderTodos = this.state.todos.map((item, index) => {
			return (
				<li key={index} className="todo">
					{item}
				</li>
			);
		});
		return (
			<div className="App" onSubmit={this.handleSubmit}>
				<ul className="todos">{renderTodos}</ul>
				<form className="add-form">
					<input type="text" onChange={this.handleOnChange} value={this.state.inputValue} />
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default App;
