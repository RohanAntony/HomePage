import React from 'react';

function experience(props){

	let details = []

	if(props.details){
		details = props.details.split('.')
		details.pop()
		details = details.map(d => <p class="detail">{d}.</p>)
	}

	return(
		<div class="experience">
			<div class="company">
				<img src={props.company_image} alt={props.company_name} />
				<span class="name">{props.company_name}</span>
			</div>
			<div class="content">
				<div class="heading">
					<span class="designation">{props.designation}</span>
					<span class="duration">({props.from} – {props.to})</span>
				</div>
				<div class="details">
					{details}
				</div>
			</div>
		</div>
	)
}

export default experience;
