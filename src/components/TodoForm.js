import React from 'react';

class TodoForm extends React.Component {
    state = {
        input: ''
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleAddClick = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    handleClearClick = e => {
        e.preventDefault();
        this.props.handleClear();
    }

    render() {
        return (
            <form>
                <input type="text" name="todo" onChange={this.handleChanges} />
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleClearClick}>Clear</button>
            </form>
        )
    }
};

export default TodoForm;