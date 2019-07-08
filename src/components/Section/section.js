import React from 'react';

import InfoArticle from '../Article/infoArticle';
import CollapsibleArticle from '../Article/collapsibleArticle';
import Experience from '../Objects/experience';

function section(props){
	return (
		<section class="section">
			<InfoArticle />
			<CollapsibleArticle heading="Experience">
				<Experience
					company_image=""
					company_name=""
					designation="Learning enthusiast, exploring technologies"
					from="Mar 2019"
					to="Present"
					details="
						Working on projects related to django.
					"/>

				<Experience
					company_image="img/cv.jpg"
					company_name="Commvault"
					designation="Software Engineer"
					from="Nov 2018"
					to="Mar 2019"
					details="Was involved in building an maintaining a python based application which was necessary for data collection from different customers. Made changes to fetch the location of these customers installed software. Was involved in test team to work on writing test cases parallely along with development helping for a better understanding of test driven development."
					/>

				<Experience
					company_image="img/cv.jpg"
					company_name="Commvault"
					designation="Associate Software Engineer"
					from="Jul 2017"
					to="Nov 2018"
					details="Worked on reports for customers which involved working on both frontend and backend of any report. This involved working on from the javascript layer on the front end to the C++ layer on backend for any report. Was involved in debugging and solving customer issues as well as building new reports for the customers based on their requirements."
					/>

				<Experience
					company_image="img/cv.jpg"
					company_name="Commvault"
					designation="Intern"
					from="Jan 2017"
					to="Mar 2017"
					details="Worked on understanding the basics of commvault application as well as how it works internally. Was introduced to the reports sections and worked on few minor projects."
					/>

				<Experience
					company_image="img/cantern.png"
					company_name="Cantern"
					designation="Developer"
					from="Jan 2017"
					to="Mar 2017"
					details="Automated non technical workflows with automation scripts written on top of Google Sheets API. Scripts were to perform operations which were not possible on EXCEL but required a procedural language like Javascript/C. Related to extraction of student data from assessments and performed computations which were used to generate automatic reports for colleges."
					/>

			</CollapsibleArticle>
		</section>
	)
}

export default section;
