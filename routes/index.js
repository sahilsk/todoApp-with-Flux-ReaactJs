var express = require('express');
var router = express.Router();
var React = require("react");
var ToDoApp = require("../react/components/app");


/* GET home page. */
router.get('/', function(req, res, next) {

	var MY_TASK_LIST= [
		{description: "My task  one",  pending: true },
		{description: "My task  2",  pending: false },
		{description: "My task  3",  pending: true },
		{description: "My task  4",  pending: false },
		{description: "My task  5",  pending: true },
		{description: "My task  6",  pending: false },
		{description: "My task  7",  pending: true },
	];


	var contentForBody = React.renderToString( 
			React.createElement( ToDoApp, {tasks: MY_TASK_LIST} ) 
			) ;

  	res.render('index.handlebars', { title: 'ExpressJS', content: contentForBody });


});

module.exports = router;
