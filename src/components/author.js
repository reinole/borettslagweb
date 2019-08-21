import React from 'react';
import styled from 'styled-components';

const Author = ({ children }) => {
	return <Paragraph>Publisert av: {children}</Paragraph>;
};

const Paragraph = styled.p`
	margin-bottom: 0;
`;

export default Author;
