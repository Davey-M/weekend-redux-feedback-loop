import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useState } from 'react';

function ReviewView() {
	const store = useSelector((store) => store);

	const [show, setShow] = useState(false);

	console.log(store);
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
							{!show && store.commentsStore.length > 40 && '...'}
							{show && store.commentsStore.substring(40)}
						</ListItemText>
					</ListItem>
					<Divider />
				</List>
			</div>
			<Button variant='contained'>Submit</Button>
		</div>
	);
}

export default ReviewView;
