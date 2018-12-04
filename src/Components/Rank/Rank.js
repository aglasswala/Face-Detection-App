import React from 'react';
import { Grid, Avatar } from '@material-ui/core'

const styles = {
	avatar: {
	  margin: 30,
	  height: 60,
	  width: 60
	},
}


const Rank = ({name, entries}) => {
	return (
		<div>
			<Grid container justify="center" alignItems="center">
			  <Avatar style={styles.avatar}>{name}</Avatar>
			</Grid>
			<div className='black f3'>
				{`your entry count is... ` }
			</div>
			<div className='black f1'>
				{entries}
			</div>
		</div>
	);
}
export default Rank;