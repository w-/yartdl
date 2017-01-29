import React from 'react';
import {observer, PropTypes} from 'mobx-react';

import ToDoInput from './ToDoInput';

import style from './toDoList.css';
import fa from 'font-awesome/css/font-awesome.css';

function ToDoList (props) {

    function handleRemoveItem (evt) {
        let idx = evt.target.dataset.idx ? parseInt(evt.target.dataset.idx) : parseInt(evt.target.parentNode.dataset.idx);
        props.removeItem(idx);
    }

    function handleToggleItem (evt){
        let idx = evt.target.dataset.idx ? parseInt(evt.target.dataset.idx) : parseInt(evt.target.parentNode.dataset.idx);
        props.toggleItem(idx);
    }

    let checkIcon = [fa.fa, fa['fa-check-circle-o'], fa['fa-2x']].join(' ');
    let trashIcon = [fa.fa, fa['fa-trash-o'], fa['fa-lg']].join(' ');

    let rows = [];
    for (let i=0; i<props.items.length; i++) {
        let toggleClassArr = [style.toggleContainer];
        let labelClassArr = [style.label];
        if (props.items[i].done) {
            toggleClassArr.push(style.done);
            labelClassArr.push(style.done);
        }

        rows.push(
            <tr key={i} className={style.toDoItem}>
                <td className={toggleClassArr.join(' ')} onClick={handleToggleItem} data-idx={i}><i className={checkIcon}></i></td>
                <td className={labelClassArr.join(' ')}>{props.items[i].label}</td>
                <td className={style.deleteContainer} onClick={handleRemoveItem} data-idx={i}><i className={trashIcon}></i></td>
            </tr>
        );
    }

    return (
        <table className={style.toDoList} style={props.style}>
            <tbody>
                {rows}
            </tbody>
        </table>
    );

}

ToDoList.propTypes = {
    items: PropTypes.observableArray,
    removeItem: React.PropTypes.func,
    toggleItem: React.PropTypes.func,
}

export default observer(ToDoList);