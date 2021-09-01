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

    handleClick = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    render() {
        return (
            <form>
                <input type="text" name="todo" onChange={this.handleChanges} />
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
};

export default TodoForm;