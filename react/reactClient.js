var 
	React = require("react")
  , ToDoApp = require("./components/app")
 ;

	var MY_TASK_LIST= [
		{description: "My task  one",  pending: true },
		{description: "My task  2",  pending: true },
		{description: "My task  3",  pending: false },
		{description: "My task  4",  pending: true },
		{description: "My task  5",  pending: false },
		{description: "My task  6",  pending: true },
		{description: "My task  7",  pending: false },
	];

	if( typeof window !== 'undefined'){
		window.MY_TASK_LIST= MY_TASK_LIST;
	}

	React.render( React.createElement(ToDoApp, {tasks: window.MY_TASK_LIST}) 
 		, document.getElementById("TodoApp_wrapper") 	);