import React from 'react';

function project(props){

	let features = [],
			todos = [];

	if(props.description){
		features = props.description.split('.')
		if(features[features.length - 1] === "")
			features.pop();
		features = features.map(f => <p>{f}.</p>)
	}

	if(props.todos){
		todos = props.todos.split('.')
		console.log()
		if(todos[todos.length - 1] === "")
			todos.pop();
		console.log(todos)
		todos = todos.map(t => <p>{t}.</p>)
	}



	return(
		<div className="project">
			<div className="title">
				<span className="name">{props.name}</span>
			</div>
			<div className="images">
				{props.children}
			</div>
			<div className="description">
				<p><span className="heading">Languages: </span><span className="languages">{props.languages}</span></p>
				<p><span className="heading">Features: </span></p>
				{features}
				<p><span className="heading">To Do: </span></p>
				{todos}
			</div>
		</div>
	)
}

export default project;
