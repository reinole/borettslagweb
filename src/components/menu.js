import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Menu() {
	return (
		<Wrapper>
			<Nav>
				<Navigation>
					<NavItem to='/'>Askergata 1</NavItem>
				</Navigation>
				<Navigation>
					<NavItem to='/'>Nyheter</NavItem>
					<NavItem to='/contact'>Kontakt</NavItem>
				</Navigation>
			</Nav>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-bottom: 1px solid black;

	-webkit-box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
`;

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: auto;
	max-width: 65rem;
	padding: 1rem;
`;

const Navigation = styled.div`
	display: flex;
`;

const NavItem = styled(Link)`
	padding: 0.5rem 1rem;
	pointer: cursor;
	text-decoration: none;
	color: black;
	border: 1px solid black;
	border-radius: 5px;
	margin-right: 1rem;
	transition: background-color 0.2s;

	-webkit-box-shadow: -3px 3px 5px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -3px 3px 5px -4px rgba(0, 0, 0, 0.75);
	box-shadow: -3px 3px 5px -4px rgba(0, 0, 0, 0.75);

	&:hover {
		background-color: lightgray;
	}
`;
