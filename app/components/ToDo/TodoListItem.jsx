import React, { Component } from 'react';

export default class TodoListItem extends Component {
    
    constructor() {
        super();
        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditing) {
            return (
                <td>
                    <form>
                        <input 
                            type="text"
                            defaultValue={task}
                        />
                    </form>
                </td>
            )
        }

        return(
            <td style={taskStyle}>
                {task}
            </td>
        )
    }

    renderActionSection() {
        if(this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onToggleClick.bind(this)}>Cancel</button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onToggleClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        )
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        )
    }

    onToggleClick() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
}