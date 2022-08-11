
import React, { useState, useEffect } from 'react'

export default function Post() {
	
	const [postData, setPost] = useState(null);
	
	useEffect(() => {
		fetch('http://gusspencer.tech/bk/wp-json/wp/v2/posts')
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setPost(data);
			})
			.catch(console.error);
			
	}, []);
	return (
		<main>
			<section>
				<h1>test</h1>
				{postData && postData[0].title.rendered}
			</section>
		</main>
	)
}
