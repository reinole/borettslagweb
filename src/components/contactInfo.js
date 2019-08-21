import React from 'react';
import styled from 'styled-components';

import useSanityFetch from '../hooks/sanityfetch';
import BlockContent from './block-content';
import Title from './title';
import Content from './content';

const ContactInfo = () => {
	const query = `*[_type == 'info']{
    title,
    adress,
    contactEmail,
    contactNumber,
    body,
  }`;

	const [busy, data, error] = useSanityFetch({
		query,
		fetchOnMount: true,
		initialValue: []
	});

	{
		if (data.length > 0) {
			console.log(data[0]);

			return (
				<Content>
					<ContactTitle>Ta kontakt med styret</ContactTitle>
					{data[0].contactNumber && (
						<ContactWrapper>
							<ContactTextTitle>Telefon:</ContactTextTitle>
							<ContactText>{data[0].contactNumber}</ContactText>
						</ContactWrapper>
					)}
					{data[0].contactEmail && (
						<ContactWrapper>
							<ContactTextTitle>Epost:</ContactTextTitle>
							<ContactText>{data[0].contactEmail}</ContactText>
						</ContactWrapper>
					)}
					<BlockContent blocks={data[0].body} />
				</Content>
			);
		} else {
			return <div>Henter data</div>;
		}
	}
};

const ContactWrapper = styled.div`
	display: flex;
`;

const ContactTitle = styled.h2``;

const ContactTextTitle = styled.p`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	font-weight: bold;
	margin-right: 0.5rem;
`;
const ContactText = styled.a`
	margin-top: 0.5rem;

	margin-bottom: 0.5rem;
`;

export default ContactInfo;
