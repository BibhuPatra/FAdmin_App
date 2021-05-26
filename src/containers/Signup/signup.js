import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../actions';

const Signup = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	// const [error, setError] = useState('');
	const userSignup = (e) => {
		e.preventDefault();

		const user = {
			firstName,
			lastName,
			email,
			password,
		};

		dispatch(signup(user));
	};
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const auth = useSelector((state) => state.auth);

	if (auth.authenticate) {
		return <Redirect to={`/`} />;
	}
	if (user.loading) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<div>
				<Layout>
					<Container>
						{user.message}
						<Row style={{ marginTop: '50px' }}>
							<Col md={{ span: 6, offset: 3 }}>
								<Form onSubmit={userSignup}>
									<Row>
										<Col md={6}>
											<Input
												label='FirstName'
												placeholder='FirstName'
												value={firstName}
												type='text'
												onChange={(e) => setFirstName(e.target.value)}
											/>
										</Col>
										<Col md={6}>
											<Input
												label='LastName'
												placeholder='LastName'
												value={lastName}
												type='text'
												onChange={(e) => setLastName(e.target.value)}
											/>
										</Col>
									</Row>
									<Input
										label='Email'
										placeholder='jhon@example.com'
										value={email}
										type='email'
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
		</div>
	);
};

export default Signup;
