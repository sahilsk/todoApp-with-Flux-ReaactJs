/** @jsx React.DOM */

'use strict';

var 
	React = require("react")
  ,	SearchBar = require("./searchBar.js")
  ,	AddTask = require("./addTask.js")
  ,	TodoList = require("./todoList.js")
;


module.exports = React.createClass({
	
	getInitialState:  function(){
		return {
			tasks: this.props.tasks,
			filteredTasks: this.props.tasks,
			search: ''
		}
	},

	getFilteredTasks : function(search){
		
		var newFilterList = [];

		if( search.length === 0 )
			newFilterList = this.state.tasks;

		newFilterList = this.state.tasks.filter( function(task){
			return task.description.indexOf( search) !== -1;
		});


		console.log("new list ", newFilterList);
		return newFilterList;
	},
	filterTasks: function(event){

		this.setState({search: event.target.value});
		this.setState({ filteredTasks: this.getFilteredTasks( event.target.value)}) ;
	},

	addNewTask: function(event){
		//var newTask = event.target.value;
		event.preventDefault();

		var newTask = document.getElementById('newTaskInput').value;
		console.log( "Adding new task: ", newTask);
		if( newTask.trim().length === 0){
			return 0;
		}
		var newTasks = this.state.tasks;
		newTasks.push( { description: newTask.trim(), pending: true} );

		this.setState( { tasks: newTasks});

	},
	render: function(){

		return (
			<div idName="myApp">
				<AddTask handleSubmit={this.addNewTask } />
				<SearchBar search={this.state.search} handleChange={this.filterTasks} />
				<TodoList tasks={this.state.filteredTasks} />
			</div>

			);

	}		


}); 


