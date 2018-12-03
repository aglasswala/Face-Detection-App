import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
	root: {
		flexGrow: 1,
	}, 
	grow: {
		flexGrow: 1,	
	},
}


const Navigation = ({ onRouteChange, isSignedIn }) => {

		if (isSignedIn) {
			return (
			  <AppBar position="static">
			    <Toolbar>
			      <Typography variant="h6" color="inherit">
			        News
			      </Typography>
			      <section style={{marginRight: '-12', marginLeft: 'auto'}}>
				      <Button color="inherit" onClick={() => onRouteChange('signout')}>Sign out</Button>
				  </section>
			    </Toolbar>
			  </AppBar>
			)
		} else {
			return (
			  <AppBar position="static">
			    <Toolbar>
			      <Typography variant="h6" color="inherit">
			        News
			      </Typography>
			      <section style={{marginRight: '-12', marginLeft: 'auto'}}>
				      <Button color="inherit" onClick={() => onRouteChange('signin')}>Sign In</Button>
				      <Button color="inherit" onClick={() => onRouteChange('register')}>Register</Button>
				  </section>
			    </Toolbar>
			  </AppBar>
			)
		}
}
export default (Navigation);