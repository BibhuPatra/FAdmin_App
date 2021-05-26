import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Modal } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getAllCategory } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/UI/Input';

const Category = (props) => {
	const [show, setShow] = useState(false);
	const [categoryName, setCategoryName] = useState('');
	const [parentCategoryId, setParentCategoryId] = useState('');
	const [categoryImage, setCategoryImage] = useState('');

	const category = useSelector((state) => state.category);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCategory());
		console.log('find', category);
	}, []);

	const handleClose = () => {
		
		setShow(false)
	}
	const handleShow = () => setShow(true);

	const renderCategories = (categories) => {
		let myCategories = [];
		for (let category of categories) {
			myCategories.push(
				<li key={category.name}>
					{category.name}
					{category.children.length > 0 ? (
						<ul>{renderCategories(category.children)}</ul>
					) : null}
				</li>
			);
		}
		return myCategories;
	};

	const createCategoryList = (categories, options = []) => {
		for (let category of categories) {
			options.push({ value: category._id, name: category.name });
			if (category.children.length > 0) {
				createCategoryList(category.children, options);
			}
		}
		return options;
	};

	const handelCategoryImage = (e) => {
		setCategoryImage(e.target.files[0]);
	};

	return (
		<Layout sidebar>
			<Container>
				<Row>
					<Col md={12}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: '10px',
							}}
						>
							<h3>Category</h3>
							<Button onClick={handleShow}>Add</Button>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<ul>{renderCategories(category.categories)}</ul>
					</Col>
				</Row>
			</Container>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add new category</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Input
						value={categoryName}
						placeholder={'Category Name'}
						onChange={(e) => setCategoryName(e.target.value)}
					/>
					<select
						className='form-control'
						value={parentCategoryId}
						onChange={(e) => {
							setParentCategoryId(e.target.value);
						}}
					>
						<option>Select Category</option>
						{createCategoryList(category.categories).map((option) => (
							<option key={option.value} value={option.value}>
								{option.name}
							</option>
						))}
					</select>
					<input
						type='file'
						name='categoryImage'
						onChange={handelCategoryImage}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</Layout>
	);
};
export default Category;
