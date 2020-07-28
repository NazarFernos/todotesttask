import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    

    render() {

        const {
            label, onDeleted,
            onToggleDone, done
        } = this.props;

        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }

        const style = {
            color:  done ? 'grey' : '#50c878',
        };

        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                      style={style}
                        onClick={ onToggleDone } >
                            {label}
                </span>

                {done && <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>}
            </span>
        );
    };
}
