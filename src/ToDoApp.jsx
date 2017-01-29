import React from 'react';

import ToDoStore from 'stores/ToDoStore';
import ToDoList from 'components/ToDoList';

import style from './app.css';

class ToDoApp extends React.Component{
    constructor (props) {
        super(props);

        this.stores = Object.assign({}, props, {
            ToDoStore: new ToDoStore,
        });
    }

    render() {
        return <div className={style.todoContainer}>
                    <h1 className={style.title}>To Do List</h1>
                    <ToDoList ToDoStore={this.stores.ToDoStore} />
                </div>;
    }
}

export default ToDoApp;