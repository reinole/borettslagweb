import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
	return <Text>{children}</Text>;
};

const Text = styled.h1``;

export default Title;
