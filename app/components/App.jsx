import React, { Component } from 'react';
import { todos } from '../todos.json';
import TodoList from './ToDo/TodoList';
import TodoForm from './ToDo/TodoForm';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos
        };
    }

    render() {
        console.log(this.state.todos);
        return (
            <div>
                <h1>React To-Do Tasks</h1>
                <TodoForm todos={this.state.todos} />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }

    createTask(task) {

    }

    toggleTask(task) {

    }

    saveTask(task) {

    }

    deleteTask(task) {
        
    }
}