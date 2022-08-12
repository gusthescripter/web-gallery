
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProject() {
	const [singleProject, setSingleProject] = useState(null);
	const  params  = useParams();
	
	useEffect(() => {
		fetch(`http://gusspencer.tech/bk/wp-json/wp/v2/project/${params.id}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setSingleProject(data);
			})
			.catch(console.error);
	}, [params.id]);
	console.log(singleProject);
	return (
		<main>
			<h1>Single</h1>
			{singleProject && singleProject.title.rendered}
		</main>
	)
}
