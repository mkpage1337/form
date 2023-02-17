import React, { useState } from 'react';
import './Form.css';

const Form = () => {
	const [name, setName] = useState('');
	const [errorName, setErrorName] = useState('');
	const [lastName, setLastName] = useState('');
	const [errorLastName, setErrorLastName] = useState('');
	const [password, setPassword] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [repPassword, setRepPassword] = useState('');
	const [errorRepPassword, setErrorRepPassword] = useState('');

	return (
		<form className='form'>
			<input type='text' placeholder='name' />
			<input type='text' placeholder='last name' />
			<input type='password' placeholder='password' />
			<input type='password' placeholder='rep password' />
			<button className='btn'>join to the company</button>
		</form>
	);
};

export default Form;
