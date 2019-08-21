import React from 'react';
import styled from 'styled-components';

const Image = imageSrc => {
	return <Img src={imageSrc.imageSrc} />;
};

const Img = styled.img`
	max-width: 100%;
	height: auto;
	box-sizing: border-box;
	object-fit: cover;
`;

export default Image;
