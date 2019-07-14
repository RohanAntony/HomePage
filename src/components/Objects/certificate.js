import React from 'react';

function certificate(props){
	return(
		<div class="certificate">
			<span class="site">{props.site_name}</span>
			<div class="content">
				<span class="link"><a href={props.certificate_loc}>{props.certificate_name}</a></span>
				<span class="description">{props.description}</span>
			</div>
		</div>
	)
}

export default certificate;
