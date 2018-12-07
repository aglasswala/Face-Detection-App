import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'

const styles = {
	section: {
		marginRight: -12,
		marginLeft: 'auto',
	},
	list: {
	  width: "30vw",
	},
	avatar: {
	  margin: 50,
	  height: 90,
	  width: 90
	},
}


class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			right: false
		}
	}

	toggleDrawer = (side, open) => () => {
	  this.setState({
	    [side]: open,
	  });
	};


	render() {
		const sideList = (
		  <div style={styles.list}>
			  <Grid container justify="center" alignItems="center">
			    <Avatar style={styles.avatar}>{this.props.name}</Avatar>
			  </Grid>
		    <Divider />
		    <Grid
		      container
		      direction="row"
		      justify="center"
		      alignItems="flex-end"
		    >
				    <List alignItems="flex-end">
				        <ListItem button >
				          <ListItemIcon>
				          	<MailIcon />
				          </ListItemIcon>
				          <ListItemText onClick={() => this.props.onRouteChange('signout')} primary="Sign out" />
				        </ListItem>
				    </List>
			</Grid>
		  </div>
		);

		if (this.props.isSignedIn) {
			return (
				<Fragment>
				  <AppBar position="static" style={{backgroundColor: '#2196f3'}}>
				    <Toolbar>
				    	<Grid
				    	  justify="space-between" 
				    	  container 
				    	  spacing={24}
				    	>
				    		<Grid item>
						      <Typography variant="h6" color="inherit">
						        Face Detection
						      </Typography>
						    </Grid>
						    <Grid item>
						      <section style={styles.section}>
							    <Button color="inherit" onClick={this.toggleDrawer('right', true)}> Profile </Button>
							  </section>
							</Grid>
						</Grid>
				    </Toolbar>
				  </AppBar>
				  <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
				    <div
				      tabIndex={0}
				      role="button"
				      onClick={this.toggleDrawer('right', false)}
				      onKeyDown={this.toggleDrawer('right', false)}
				    >
				      {sideList}
				    </div>
				  </Drawer>
				</Fragment>
			)
		} else {
			return (
			<Fragment>
			  <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
			    <Toolbar>
				    <Grid
				      justify="space-around" 
				      container 
				      spacing={24}
				    >
				    	<Grid item>
					      <Typography variant="h6" color="inherit">
					        Face Detection
					      </Typography>
					    </Grid>
					    <Grid item>
					      <section style={styles.section}>
						      <Button color="inherit" onClick={() => this.props.onRouteChange('signin')} >Sign In</Button>
						      <Button color="inherit" onClick={() => this.props.onRouteChange('register')}>Register</Button>
						  </section>
						</Grid>
					</Grid>
			    </Toolbar>
			  </AppBar>
			  <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
			    <div
			      tabIndex={0}
			      role="button"
			      onClick={this.toggleDrawer('right', false)}
			      onKeyDown={this.toggleDrawer('right', false)}
			    >
			      {sideList}
			    </div>
			  </Drawer>
			</Fragment>
			)
		}
	}
} 

export default (Navigation);