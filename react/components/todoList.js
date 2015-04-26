/** @jsx React.DOM */
'use strict'

var
   React = require("react")
  , Task = require("./task.js") 
;

/**
*	
* @example
	{ description: "my task to do" , pending: true/false}

*/

module.exports = React.createClass({
	

	render: function(){


			var liListNodes=  this.props.tasks.map( function(task){
				var classToApply = "";
				if( !task['pending']  )
					classToApply ="taskItem finished";
				else
					classToApply = "taskItem";

				return <Task className={classToApply} task={task}   />

			});				
				

			return (	
				<ul>
					{liListNodes}
				</ul>
			);
	}

}); 


