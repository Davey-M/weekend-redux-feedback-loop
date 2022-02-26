import { TextField, Button } from '@mui/material';
import { useState } from 'react';

function NumberView() {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		let num = e.target.value;

		// allow the value to be cleared
		if (num === '') {
			setValue(num);
			return;
		}

		// stop the num from being greater than 5
		if (num > 5) {
			setValue(5);
			return;
		}

		// stop the num from being less than 1
		if (num < 1) {
			setValue(1);
			return;
		}

		// set the value of the input
		setValue(num);
	};

	const handleKeyPress = (e) => {
		e.preventDefault();

		// console.log(e.key);

		const key = Number(e.key);

		if (key < 6 && key > 0) {
			setValue(key);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitting');
	};

	return (
		<div className='view-wrapper'>
			<h1>How are you feeling today?</h1>
			<form onSubmit={handleSubmit}>
				<TextField
					variant='outlined'
					label='rating 1-5'
					type='number'
					required
					value={value}
					onChange={handleChange}
					onKeyPress={handleKeyPress}
				/>
				<Button variant='contained' type='submit'>
					Next
				</Button>
			</form>
		</div>
	);
}

export default NumberView;
