import axios from 'axios';
import { useEffect, useState } from 'react';

function AdminView() {
	const [feedback, setFeedback] = useState([]);

	const getFeedback = () => {
		axios
			.get('/feedback')
			.then((response) => {
				setFeedback(response.data);
			})
			.catch((err) => {
				console.error('Error getting feedback in AdminView', err);
			});
	};

	useEffect(() => {
		getFeedback();
	}, []);

	console.log(feedback);
	return <div className='view-wrapper'></div>;
}

export default AdminView;
