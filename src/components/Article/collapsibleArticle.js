import React from 'react';

function collapsibleArticle(props){

	let displayClass = "content ";
	if(props.display)
		displayClass += "content-visible";
	else
		displayClass += "content-hidden";

	let downButtonClass = "button "
	let upButtonClass = "button "

	if(props.display)
		downButtonClass += " hidden"
	else
		upButtonClass += "hidden"

	let hashTag = "#" + props.heading

	function toggleContent(){
		props.toggleDisplay(props.display_key)
	}

	return (
		<article class="article collapsible">
			<div class="heading" name={props.heading}>
				<span>{props.heading}</span>
				<span class={downButtonClass} onClick={toggleContent}><i class="fas fa-caret-down icon"></i></span>
				<span class={upButtonClass} onClick={toggleContent}><i class="fas fa-caret-up icon"></i></span>
			</div>
			<div class={displayClass}>
				{props.children}
			</div>
		</article>
	)

}

export default collapsibleArticle;
