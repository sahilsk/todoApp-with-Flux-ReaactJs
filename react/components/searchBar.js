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
	

	render: function(){

		return (

			<div className="searchWrapper">

				<input type="text" value={this.props.search} 
					placeholder='Search here..' 
					onChange={this.props.handleChange }
					/>

			</div>

			);
	}		


}); 


