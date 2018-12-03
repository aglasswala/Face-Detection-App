import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
	section: {
		marginRight: -12,
		marginLeft: 'auto',
	}
}


const Navigation = ({ onRouteChange, isSignedIn }) => {

		if (isSignedIn) {
			return (
			  <AppBar position="static" style={{backgroundColor: '#2196f3'}}>
			    <Toolbar>
			      <Typography variant="h6" color="inherit">
			        News
			      </Typography>
			      <section style={styles.section}>
				      <Button color="inherit" onClick={() => onRouteChange('signin')}>Sign out</Button>
				  </section>
			    </Toolbar>
			  </AppBar>
			)
		} else {
			return (
			  <AppBar position="static" style={{backgroundColor: '#2196f3'}}>
			    <Toolbar>
			      <Typography variant="h6" color="inherit">
			        News
			      </Typography>
			      <section style={styles.section}>
				      <Button color="inherit" onClick={() => onRouteChange('signin')}>Sign In</Button>
				      <Button color="inherit" onClick={() => onRouteChange('register')}>Register</Button>
				  </section>
			    </Toolbar>
			  </AppBar>
			)
		}
}
export default (Navigation);