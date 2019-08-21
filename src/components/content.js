import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
	margin: auto;
	margin-top: 2rem;

	max-width: 45rem;

	@media (max-width: 50rem) {
		margin: 0 1rem;
	}
`;

export default Content;
