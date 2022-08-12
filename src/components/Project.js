import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function Project() {
	const [projectData, setProject] = useState(null);
	
	useEffect(() => {
		fetch('http://gusspencer.tech/bk/wp-json/wp/v2/project')
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setProject(data);
			})
			.catch(console.error);
			
	}, []);
	return (
		<main>
			<section>
				<h1>Projects</h1>
				{projectData && projectData.map((projects, index) => (
					<div>
						<h3>{projects.title.rendered}</h3>
						<Link to={`/singlepost/${projects.id}`} key={projects.id}>info</Link>
					</div>
				))}
			</section>
		</main>
	)
}
