import React from 'react';
import styled from 'styled-components';

import useSanityFetch from '../hooks/sanityfetch';

import Title from './title';
import Image from './image';
import BlockContent from './block-content';

const SiteInfo = () => {
	const query = `*[_type == 'info']{
    adress,
    contactEmail,
    contactNumber,
    cooperatives,
    body,
    mainImage{
      'imageUrl': asset->url
    }
  }`;

	const [busy, data, error] = useSanityFetch({
		query,
		fetchOnMount: true,
		initialValue: []
	});

	{
		if (data.length > 0) {
			return (
				<Wrapper>
					<Title>{data[0].cooperatives}</Title>
					<Image imageSrc={data[0].mainImage.imageUrl} />
					<BlockContent blocks={data[0].body} />
				</Wrapper>
			);
		} else {
			return <div>henter</div>;
		}
	}
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: auto;
	align-items: center;
	max-width: 55rem;
	margin-bottom: 2rem;

	@media (max-width: 50rem) {
		margin: 0 1rem;
	}

	p {
		text-align: center;
	}
`;

export default SiteInfo;
