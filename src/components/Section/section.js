import React from 'react';

import InfoArticle from '../Article/infoArticle';
import CollapsibleArticle from '../Article/collapsibleArticle';
import Experience from '../Objects/experience';

function section(props){
	return (
		<section class="section">
			<InfoArticle />
			<CollapsibleArticle heading="Experience">
				<Experience company_image=""
										company_name=""
										designation="Learning enthusiast, exploring technologies"
										from="Mar 2019"
										to="Present"
										details="
											Working on projects related to django.
										"/>

			</CollapsibleArticle>
		</section>
	)
}

export default section;
