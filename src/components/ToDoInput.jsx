import React from 'react';
import {observer} from 'mobx-react';

import style from './toDoList.css';

class ToDoInput extends React.Component{

    constructor (props) {
        super(props);

        this.handleValChange = this.handleValChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            todoVal : '',
        };
    }

    handleValChange (evt) {
        this.setState({todoVal: evt.target.value});
    }

    handleKeyPress (evt) {
        if (evt.key == 'Enter') {
            this.props.addItem(this.state.todoVal);
            this.setState({todoVal: ''});
        }
    }

    render () {
        return (
            <div className="" style={this.props.style}>
                <input type="text"
                        placeholder="Type a ToDo item here"
                        autoFocus={true}
                        className={style.toDoInput}
                        onChange={this.handleValChange}
                        value={this.state.todoVal}
                        onKeyPress={this.handleKeyPress}/>
            </div>
        );

    }

}

ToDoInput.propTypes = {
    addItem : React.PropTypes.func.isRequired,
}

export default observer(ToDoInput);