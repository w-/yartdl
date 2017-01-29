import {observable, computed, action, extendObservable} from "mobx";


class ToDoStore {

	@observable toDoList = [];

	@action addItem (label) {
		this.toDoList.splice(0, 0, {label: label, done:false});
	}

	@action removeItem (idx) {
		this.toDoList.splice(idx, 1);
	}

	@action toggleItem (idx) {
		this.toDoList[idx].done = !this.toDoList[idx].done;
	}
}

export default ToDoStore;