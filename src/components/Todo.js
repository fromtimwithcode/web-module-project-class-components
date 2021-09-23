import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleComplete(props.item.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            <div className="task">
                <p>{props.item.task}</p>
            </div>
        </div>
    )
};

export default Todo;