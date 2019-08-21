import React from 'react';
import styled from 'styled-components';

const NewsDate = ({ children }) => {
	let publishDate = new Date(children);
	let date = publishDate.getDate();
	let month = publishDate.getMonth();
	let year = publishDate.getFullYear();

	return (
		<DateStamp>
			Sist oppdatert: {date}.{month}.{year}
		</DateStamp>
	);
};

const DateStamp = styled.p`
	font-size: 14px;
	color: gray;
	margin-top: 0;
`;

export default NewsDate;
