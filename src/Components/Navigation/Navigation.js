import React, { Fragment } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Drawer,
	List,
	ListItem,
	Divider,
	Grid,
	Avatar,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions
} from '@material-ui/core'

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
	}
}


class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			right: false,
			open: false
		}
	}

	toggleDrawer = (side, open) => () => {
	  this.setState({
	    [side]: open,
	  });
	};

	handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

	render() {

		const { route } = this.props

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
			    <List style={{width: "100%"}} >
						<ListItem button onClick={() => this.props.onRouteChange('signin')}>
			         Sign out 
						</ListItem>
			    </List>
			</Grid>
		  </div>
		);

		if (route === "home") {
			return (
				<Fragment>
				  <AppBar position="fixed" style={{backgroundColor: '#2196f3'}}>
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
							    <Button color="inherit" onClick={this.handleClickOpen}> Need a picture? </Button>
									<Button color="inherit" onClick={this.toggleDrawer('right', true)}> Profile  </Button>
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
					<Dialog
						open={this.state.open}
						onClose={this.handleClose}
					>
						<DialogTitle>{"Here's a link you can use"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								https://scstylecaster.files.wordpress.com/2015/10/model-with-glowing-skin.jpg?w=916&h=1374
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary" autoFocus>
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</Fragment>
			)
		} else if(route === "register"){
			return (
			<Fragment>
			  <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
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
						      <Button color="inherit" onClick={() => this.props.onRouteChange('signin')} >Regiser page</Button>
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
		} else {
		return (
			<Fragment>
				<AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
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