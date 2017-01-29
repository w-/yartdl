import React from 'react';
import {observer, PropTypes} from 'mobx-react';

import ToDoInput from './ToDoInput';
import ToDoItems from './ToDoItems';

function ToDoList (props) {

    function addItem (val) {
        props.ToDoStore.addItem(val);
    }

    function toggleItem(idx) {
        props.ToDoStore.toggleItem(idx);
    }

    function removeItem(idx) {
        props.ToDoStore.removeItem(idx);
    }

    return (
        <div>
            <ToDoInput addItem={addItem} />
            <ToDoItems items={props.ToDoStore.toDoList}
                        toggleItem={toggleItem}
                        removeItem={removeItem} />
        </div>
    );

}

ToDoList.propTypes = {
    ToDoStore: PropTypes.observableObject,
}

export default observer(ToDoList)