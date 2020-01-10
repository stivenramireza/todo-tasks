import React, { Component } from 'react';
import _ from 'lodash';

export default class TodoForm extends Component {
    
    constructor(){
        super();
        this.state = {
            error: null
        }
    }

    renderError() {
        if(!this.state.error) { 
            return null; 
        } else {
            return (
                <div style={{color: 'red'}}>
                    {this.state.error}
                </div>
            )
        }
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input
                    ref={(input) => this.inputText = input} 
                    type="text"
                    placeholder="Add a task"
                />
                <button>Create</button>
                {this.renderError()}
            </form>
        )
    }

    handleCreate(e) {
        e.preventDefault();
        let task = this.inputText.value;
        let validateInput = this.validateInput(task);
        if(validateInput) {
            this.setState({
                error: validateInput
            });
        }
        this.inputText.value = '';
    }

    validateInput(task) {
        if(!task) {
            return 'Please enter a task'
        } else if(_.find(this.props.todos, todo => todo.task == task )) {
            return 'Task already exists'
        } else {
            return null;
        }
    }

}