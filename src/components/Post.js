
import React, { useState, useEffect } from 'react'

export default function Post() {
	
	const [postData, setPost] = useState(null);
	
	useEffect(() => {
		fetch('http://gusspencer.tech/bk/wp-json/wp/v2/media')
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
			});
	})
	
	return
}
