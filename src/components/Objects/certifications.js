import React from 'react';

function certifications(props){
	return(
		<div class="certifications">
			<div class="subject">
				<span class="title">{props.subject}</span>
			</div>
			<div>
				{props.children}
			</div>
		</div>
	)
}

export default certifications;
