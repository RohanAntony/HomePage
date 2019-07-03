import React from 'react';

// https://avatars3.githubusercontent.com/u/5779016?s=460&v=4
function InfoArticle(props){
	return (
		<article class="article info">
			<img src="https://avatars3.githubusercontent.com/u/5779016?s=460&v=4" alt="Profile"/>
			<div class="about">
				<p class="name">Rohan Antony</p>
				<span class="career"><i class="fas fa-circle icon"></i> &nbsp;Actively looking for oppurtunities</span>
				<hr/>
				<p>A little bit of that, a little bit of this and somehow everything. </p>
				<p>Interested in web development, mainly full stack development with React and Django. </p>
				<p>Worked on projects based of MEAN (Mongo, Express, Angular and NodeJS). Need some refreshment on subject before getting started.</p>
				<p>Also interested in Machine Learning especially supervised machine learning.</p>
			</div>
			<div class="links">
				<p><i class="fab fa-github icon"></i><a href="https://github.com/RohanAntony">Github</a></p>
				<p><i class="fab fa-linkedin icon"></i><a href="https://www.linkedin.com/in/rohanantony/">LinkedIn</a></p>
			</div>
		</article>
	)
}

export default InfoArticle;
