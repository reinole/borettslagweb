import React from 'react';
import styled from 'styled-components';

const NewsWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
	margin-bottom: 4rem;
	padding: 2rem;
	box-shadow: 0 4px 8px -2px gray;
`;

export default NewsWrapper;
