import React from 'react';

function certificate(props){
	return(
		<div class="certificate">
			<span class="site">{props.site_name}</span>
			<div class="content">
				<span class="link">{props.certificate_name} &nbsp;
					<a href="#Certifications" onClick={evt => props.toggleOverlay(props.certificate_image)}>
						<i class="fas fa-certificate" title="View certificate"></i>
					</a>
					&nbsp;
					<a href={props.certificate_loc}>
						<i class="fas fa-external-link-square-alt" title="View on website"></i>
					</a>
				</span>
				<span class="description">{props.description}</span>
			</div>
		</div>
	)
}

export default certificate;
