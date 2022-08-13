
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function PostItem({datas}) {
	const [postItemData, setPostItem] = useState(null);
	
	useEffect(() => {
		console.log(datas)
		fetch(`http://gusspencer.tech/bk/wp-json/wp/v2/media/${datas.featured_media}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setPostItem(data);
			})
			.catch(console.error);
			
	}, []);
	return (
		<main>
			<section>
				<h3>{datas.title.rendered}</h3>
				<br/>
				<img src={postItemData && postItemData.guid.rendered} width='80' height='80'></img>
			</section>
		</main>
	)
}
