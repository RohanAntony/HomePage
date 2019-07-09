import React from 'react';

import InfoArticle from '../Article/infoArticle';
import CollapsibleArticle from '../Article/collapsibleArticle';
import Experience from '../Objects/experience';
import Project from '../Objects/project';

function section(props){
	return (
		<section class="section">
			<InfoArticle />
			<CollapsibleArticle heading="Experience">
				<Experience
					company_image=""
					company_name=""
					designation="Learning enthusiast, exploring technologies, initiating projects"
					from="Mar 2019"
					to="Present"
					details="
						Was involved in understanding what seperates django from express and also how the django rest framework works.
						Learnt and implemented multiple projects on React just like this Website which is written on top of react.
						Implemented a calendar module on react which when completed can be used to set reminders and plan holidays.
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
			<CollapsibleArticle heading="Projects">
					<Project
						name="Calendar Application"
						languages="HTML, CSS/SCSS(Preprocessing), React(Javascript)"
						description="Generates a calendar for the selected month and year. Holidays or special days are shown in red and can be clicked upon to check for details. Holiday list is fetched from calendarific API using the axios library. Optimizations done to avoid redundant API calls to fetch holiday list."
						todos="Add a backend API in django which stores the notes written for any given date."
						>
						<img src="img/calendar1.png" alt="calendar"/>
						<img src="img/calendar2.png" alt="holiday description"/>
					</Project>
			</CollapsibleArticle>
		</section>
	)
}

export default section;
