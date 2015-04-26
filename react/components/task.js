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
			checked: this.props.task.pending
		}
	},
	
	handleChange: function(event){

		var val= event.target.checked;
		this.setState({ checked :  val });;
		this.props.task.pending= val;
	},

	render: function(){

		return (

			<li className={this.props.className}> {this.props.task.description}
				<input type="checkbox" 
					checked={this.state.checked} onChange={this.handleChange} />
			 </li>

			);
	}		


}); 


