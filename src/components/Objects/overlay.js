import React from 'react';

function overlay(props){

	function clickSide(){
		props.toggleOverlay();
	}

	function overrideClick(evt){
		//This is to override closing overlay if click is on image
		evt.stopPropagation();
	}

	return(
		<div class="overlay" onClick={clickSide}>
			<img src={props.img} onClick={overrideClick}/>
		</div>
	)
}

export default overlay;
