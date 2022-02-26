import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/';
import { useSelector, useDispatch } from 'react-redux';

function TextView({ title, route, dispatchRoute, storeName }) {
	// get store value from the reducer
	const storeValue = useSelector((store) => store[storeName]);
	const dispatch = useDispatch();

	// set the input value to the current store value
	const [value, setValue] = useState(storeValue);
	const history = useHistory();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('submitting');
		// console.log(value);

		// set the reducer value
		dispatch({
			type: dispatchRoute,
			payload: value,
		});

		// move to the next route
		history.push(route);
	};

	return (
		<div className='view-wrapper text-view-wrapper'>
			<h1>{title}</h1>
			<form onSubmit={handleSubmit}>
				<TextField
					className='input'
					variant='outlined'
					label='Share your thoughts'
					type='text'
					required
					value={value}
					onChange={handleChange}
					multiline
					rows={3}
				/>
				<Button variant='contained' type='submit'>
					Next
				</Button>
			</form>
		</div>
	);
}

export default TextView;
