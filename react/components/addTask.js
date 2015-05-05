/** @jsx React.DOM */
'use strict'

var
   React = require("react")
;

/**
*	
* @example
	{ description: "my task to do" , pending: true/false}
*/


module.exports = React.createClass({
	getInitialState: function(){
		return {
			value: "new task 2"
		}
	},
	handleChange:function(event){
		this.setState({
			value: event.target.value
		})
	},
	render: function(){

		return (

			<div className="addTaskWrapper">

				<input id="newTaskInput" type="text" value={this.state.value} 
					placeholder="add task here."  onChange={this.handleChange}
					/>
				<button onClick={this.props.handleSubmit } >
				 Add Task </button>

			</div>

			);
	}		


}); 


