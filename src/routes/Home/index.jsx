import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
	padding: 4em;
	background: blue;
`;

class Home extends React.PureComponent {
	render() {
		return (
			<Wrapper>
				<Button variant="contained" color="primary">
					Hello World
				</Button>
			</Wrapper>
		);
	}
}

export default Home;
