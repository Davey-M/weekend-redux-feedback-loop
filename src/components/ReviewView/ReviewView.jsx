import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

function ReviewView() {
	const store = useSelector((store) => store);

	console.log(store);
	return (
		<div>
			<List>
				<ListItem>
					<ListItemText>Feeling: {store.feelingStore}</ListItemText>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemText>Understanding: {store.understandingStore}</ListItemText>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemText>Support: {store.supportStore}</ListItemText>
				</ListItem>
				<Divider />
				<ListItem button>
					<ListItemText>
						Comments: {store.commentsStore.substring(0, 15)}
						{store.commentsStore.length > 15 && '...'}
					</ListItemText>
				</ListItem>
				<Divider />
			</List>
		</div>
	);
}

export default ReviewView;
