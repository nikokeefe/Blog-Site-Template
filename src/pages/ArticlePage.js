import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from '../pages/NotFoundPage';
import CommentsList from '../components/CommentsList';
import LikesSection from '../components/LikesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find(article => article.name === name);

	const [articleInfo, setArticleInfo] = useState({ likes: 0, comments: [] });

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`/api/articles/${name}`);
			const body = await result.json();
			setArticleInfo(body);
		};
		fetchData();
	}, [name]);

	if (!article) return <NotFoundPage />;

	const otherArticles = articleContent.filter(article => article.name !== name);

	return (
		<>
			<h1>{article.title}</h1>
			<LikesSection
				articleName={name}
				likes={articleInfo.likes}
				setArticleInfo={setArticleInfo}
			/>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<CommentsList comments={articleInfo.comments} />
			<AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
			<h3>Other Articles:</h3>
			<ArticlesList articles={otherArticles} />
		</>
	);
};

export default ArticlePage;
