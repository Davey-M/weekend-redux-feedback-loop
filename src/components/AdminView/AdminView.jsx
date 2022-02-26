import axios from 'axios';
import { useEffect, useState } from 'react';
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Backdrop,
	CircularProgress,
} from '@mui/material';

function AdminView() {
	const [feedback, setFeedback] = useState([]);
	const [loading, setLoading] = useState(true);

	// get feedback list from the server
	const getFeedback = () => {
		axios
			.get('/feedback')
			.then((response) => {
				// set the page state to the data from the server
				setFeedback(response.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error getting feedback in AdminView', err);
				setLoading(false);
			});
	};

	useEffect(() => {
		getFeedback();
	}, []);

	console.log(feedback);
	return (
		<div className='view-wrapper admin-wrapper'>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<b>Feeling</b>
						</TableCell>
						<TableCell>
							<b>Understanding</b>
						</TableCell>
						<TableCell>
							<b>Support</b>
						</TableCell>
						<TableCell>
							<b>Comments</b>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{feedback.map((item) => {
						const { id, feeling, understanding, support, comments } = item;
						return (
							<TableRow key={id}>
								<TableCell>{feeling}</TableCell>
								<TableCell>{understanding}</TableCell>
								<TableCell>{support}</TableCell>
								<TableCell>
									{comments.substring(0, 20)}
									{comments.length > 20 && '...'}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			<Backdrop open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</div>
	);
}

export default AdminView;
