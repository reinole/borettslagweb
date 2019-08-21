import React from 'react';

import useSanityFetch from '../hooks/sanityfetch';
import BlockContent from './block-content';

import Content from './content';
import Title from './title';
import NewsDate from './newsDate';
import Author from './author';
import NewsWrapper from './newsWrapper';

const RenderNews = () => {
	const query = `*[_type == 'news']{
    ...,
    author->{name}
  }`;

	const [busy, data, error] = useSanityFetch({
		query,
		fetchOnMount: true,
		initialValue: []
	});

	if (data.length > 0) {
		return (
			<div>
				<Content>
					{data.map(news => {
						return (
							<NewsWrapper key={news._id}>
								<Title>{news.title}</Title>
								{news.author && <Author>{news.author.name}</Author>}
								<NewsDate>{news._createdAt}</NewsDate>
								<BlockContent blocks={news.body} />
							</NewsWrapper>
						);
					})}
				</Content>
			</div>
		);
	} else {
		return <div>henter</div>;
	}
};

export default RenderNews;
