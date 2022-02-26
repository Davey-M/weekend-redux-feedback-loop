import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useState } from 'react';

import axios from 'axios';

import { useHistory } from 'react-router-dom';

function ReviewView() {
	const history = useHistory();
	const store = useSelector((store) => store);

	const [show, setShow] = useState(false);

	const handleSubmit = () => {
		console.log(store);
	};

	// console.log(store);
	return (
		<div className='review-wrapper'>
			<div className='review-items'>
				<List>
					<ListItem>
						<ListItemText>
							<b>Feeling:</b> {store.feelingStore}
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText>
							<b>Understanding:</b> {store.understandingStore}
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemText>
							<b>Support:</b> {store.supportStore}
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem button onClick={() => setShow(!show)}>
						<ListItemText>
							<b>Comments:</b> {store.commentsStore.substring(0, 40)}
							{/* render three dots when closed if there is more content to open */}
							{!show && store.commentsStore.length > 40 && '...'}
							{/* conditionally show more content */}
							{show && store.commentsStore.substring(40)}
						</ListItemText>
					</ListItem>
					<Divider />
				</List>
			</div>
			<Button variant='contained' onClick={handleSubmit}>
				Submit
			</Button>
		</div>
	);
}

export default ReviewView;
