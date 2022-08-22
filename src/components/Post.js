import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';

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
				<h1 className="text-4xl">Posts</h1>
				{postData && postData.map((posts, index) => (
					<div>
						<PostItem datas={posts} />
						<Link to={`/singlepost/${posts.id}`} key={posts.id}>info</Link>
					</div>
				))}
			</section>
		</main>
	)
}
