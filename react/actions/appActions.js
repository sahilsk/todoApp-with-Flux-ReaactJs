var 
	AppDispatcher = require("../dispatcher/appDispatcher")
	ToDoList = require("../constants/appConstants")
	;



var actions = {
	
	add_task: function(task){
		AppDispatcher.dispatch({
			actionType: ToDoList.ADD_TASK,
			task: task
		})
	}

}