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
                <TodoForm 
                    todos={this.state.todos}
                    createTask={this.createTask.bind(this)}
                />
                <TodoList 
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                />
            </div>
        )
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({
            todos: this.state.todos
        });
    }

    toggleTask(task) {
        const foundTodo = _.find(
            this.state.todos,
            todo => todo.task === task
        );
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({
            todos: this.state.todos
        });
    }

    saveTask(task) {

    }

    deleteTask(task) {
        
    }
}