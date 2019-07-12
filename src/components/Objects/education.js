import React from 'react';

function education(props){
	return (
		<div class="education">
			<div class="company">
				<img src={props.institution_image} alt={props.institution_name} />
			</div>
			<div class="content">
					<span class="designation">{props.institution_name}</span>
					<span class="standard">{props.standard}</span>
					<span class="duration">{props.from} – {props.to}</span>
			</div>
		</div>
	)
}

export default education;
