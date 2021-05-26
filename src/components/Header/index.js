import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions';

const Header = (props) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(signout());
	};
	const renderLoggedInLinks = () => {
		return (
			<Nav style={{ right: '20px', position: 'absolute' }}>
				<li className='nav-item'>
					<NavLink to='/signin' onClick={logout} className='nav-link'>
						Signout
					</NavLink>
				</li>
			</Nav>
		);
	};
	const renderNonLoggedInLinks = () => {
		return (
			<Nav style={{ right: '20px', position: 'absolute' }}>
				<li className='nav-item'>
					<NavLink to='/signup' className='nav-link'>
						SignUp
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/signin' className='nav-link'>
						SignIn
					</NavLink>
				</li>
			</Nav>
		);
	};
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'
				style={{ zIndex: '1' }}
			>
				<Container fluid>
					<Link to='/' className='navbar-brand'>
						Admin Dashboard
					</Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						{auth.authenticate
							? renderLoggedInLinks()
							: renderNonLoggedInLinks()}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
