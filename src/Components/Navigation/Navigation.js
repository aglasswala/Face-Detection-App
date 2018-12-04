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
	  height: 60,
	  width: 60
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
		    <List>
		      {['All mail', 'Trash', 'Spam'].map((text, index) => (
		        <ListItem button key={text}>
		          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
		          <ListItemText primary={text} />
		        </ListItem>
		      ))}
		    </List>
		  </div>
		);

		if (this.props.isSignedIn) {
			return (
				<Fragment>
				  <AppBar position="static" style={{backgroundColor: '#2196f3'}}>
				    <Toolbar>
				      <Typography variant="h6" color="inherit">
				        Face Detection
				      </Typography>
				      <section style={styles.section}>
					      <Button 
					      	color="inherit" 
					      	onClick={() => this.props.onRouteChange('signout')}
					       >Sign out</Button>
					       <Button color="inherit" variant="outlined" onClick={this.toggleDrawer('right', true)}> Drawer </Button>
					  </section>
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
			  <AppBar position="static" style={{backgroundColor: '#2196f3'}}>
			    <Toolbar>
			      <Typography variant="h6" color="inherit">
			        Face Detection
			      </Typography>
			      <section style={styles.section}>
				      <Button color="inherit" onClick={() => this.props.onRouteChange('signin')} >Sign In</Button>
				      <Button color="inherit" onClick={() => this.props.onRouteChange('register')}>Register</Button>
				  </section>
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