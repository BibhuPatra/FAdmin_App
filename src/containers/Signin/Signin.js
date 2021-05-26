import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Signin = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [error, setError] = useState('');
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const userLogin = (e) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};
		dispatch(login(user));
	};
	if (auth.authenticate) {
		return <Redirect to={`/`} />;
	}

	return (
		<div>
			<Layout>
				<Container>
					<Row style={{ marginTop: '50px' }}>
						<Col md={{ span: 6, offset: 3 }}>
							<Form onSubmit={userLogin}>
								<Input
									label='Email'
									placeholder='email@expample.com'
									value={email}
									type='text'
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Input
									label='Password'
									placeholder='Password'
									value={password}
									type='password'
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Button variant='primary' type='submit'>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Layout>
		</div>
	);
};

export default Signin;
