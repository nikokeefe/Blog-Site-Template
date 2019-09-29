import React from 'react';

const LikesSection = ({ articleName, likes, setArticleInfo }) => {
	const likeArticle = async () => {
		const result = await fetch(`/api/articles/${articleName}/like`, {
			method: 'post'
		});
		const body = await result.json();
		setArticleInfo(body);
	};

	return (
		<div id='likes-section'>
			<button onClick={() => likeArticle()}>Add Like</button>
			<p>Likes: {likes}</p>
		</div>
	);
};

export default LikesSection;
