import React from 'react';

function overlay(props){
	return(
		<div class="overlay">
			<div class="inner">
				<div class="container">
					<img src={props.img}/>
				</div>
			</div>
		</div>
	)
}

export default overlay;
