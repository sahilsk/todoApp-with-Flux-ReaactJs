var 
	  AppDispatcher = require("../dispatcher/appDispatcher")
	, ToDoConstants = require("../constants/appConstants")
;

var AppStore = {};

AppDispatcher.register( function(payload){

	var action - payload.actionType;


	switch( action){

		case ToDoConstants.ADD_TASK: 
			var new_task = payload.task;

			break;
	}

});

module.exports = AppStore;