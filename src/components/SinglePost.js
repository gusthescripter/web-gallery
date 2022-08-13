
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function SinglePost() {
	const [singlePost, setSinglePost] = useState(null);
	const  params  = useParams();
	
	useEffect(() => {
		fetch(`http://gusspencer.tech/bk/wp-json/wp/v2/posts/${params.id}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setSinglePost(data);
			})
			.catch(console.error);
	}, [params.id]);
	console.log(singlePost);
	return (
		<main>
			<h1>Single</h1>
			{singlePost && singlePost.title.rendered}
			<br/>
			<Link to='/post'>Back</Link>
			<div dangerouslySetInnerHTML={singlePost && { __html: singlePost.content.rendered }}></div>
		</main>
	)
}
