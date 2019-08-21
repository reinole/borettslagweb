import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import styled from 'styled-components';

const serializers = {
	types: {
		block(props) {
			switch (props.node.style) {
				case 'h1':
					return <h1>{props.children}</h1>;

				case 'h2':
					return <h2>{props.children}</h2>;

				case 'h3':
					return <h3>{props.children}</h3>;

				case 'h4':
					return <h4>{props.children}</h4>;

				case 'blockquote':
					return <blockquote>{props.children}</blockquote>;

				default:
					return <Text>{props.children}</Text>;
			}
		}
	}
};

const BlockContent = ({ blocks }) => (
	<BaseBlockContent blocks={blocks} serializers={serializers} />
);

const Text = styled.p`
	font-size: 18px;
	line-height: 24px;
`;

export default BlockContent;
