import React from 'react';

import InfoArticle from '../Article/infoArticle';
import CollapsibleArticle from '../Article/collapsibleArticle';

function section(props){
	return (
		<section class="section">
			<InfoArticle />
			<CollapsibleArticle heading="Resume">
			</CollapsibleArticle>
		</section>
	)
}

export default section;
