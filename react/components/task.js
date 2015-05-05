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
		return{
			checked: !this.props.task.pending,
			className: this.props.className
		}
	},
	
	handleChange: function(event){
		var classToApply = ""
		var val= event.target.checked;
		this.setState({ checked :  val });;
		this.props.task.pending= !(!!val);
		if( this.props.task['pending']  )
			classToApply = "taskItem";
		else
			classToApply = "taskItem finished";

		this.setState({ className: classToApply});
	},
	render: function(){

		return (

			<li className={this.state.className}> {this.props.task.description}
				<input type="checkbox" 
					checked={this.state.checked} onChange={this.handleChange} />
			 </li>

			);
	}		


}); 


