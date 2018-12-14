import React, { Fragment, Component } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@material-ui/core';

const styles = {
	card: {
		border: "0",
		borderRadius: "6px",
		color: "rgba(0, 0, 0, 0.87)",
		background: "#fff",
		boxShadow:
		  "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", 
		width: 375,
		fontSize: ".875rem",
	},
	overlay: {
		position: 'absolute',
		flexDirection: "column",
		borderRadius: "6px",
		paddingTop: 50,
		paddingBottom: 40,
		width: 345,
		marginLeft: "-9px",
		marginTop: "-40px",
		border: "0",
		backgroundColor: '#2196f3',
	},
	text: {
		minWidth: 340,
		paddingTop: 11,
		marginBottom: 50
	}
}


class SignIn extends Component {
	constructor(props) {
		super();
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://ancient-dawn-65122.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(user => {
				if(user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			})

	}
	render() {

		return (
			<Fragment>
				<Grid 
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"
					style={{height: '85vh'}}
				>
					<Grid
						item
						xs={12} sm={12} md={4}
					> 
						<Card style={styles.card}>
						  <CardContent>
						    <div style={styles.overlay}>
						  	    <Typography variant="h4" color="primary" gutterBottom>
						  	    	Log In
						  	    </Typography>
						  	</div>
							<div >
								<br />
								<TextField
								  label="Email"
								  margin="normal"
								  onChange={this.onEmailChange}
								  style={{marginTop: '100px', minWidth: 340}}
								/>
								<br />
								<TextField
								  label="Password"
								  type="password"
								  margin="normal"
								  style={styles.text}
								  onChange={this.onPasswordChange}
								/>
								<br />
								<Button style={{color: "#2196f3"}} onClick ={this.onSubmitSignIn}>
								  Submit
								</Button>
							 	<Button style={{color: "#2196f3"}} onClick ={() => this.props.onRouteChange('register')} >
							 		Register
							 	</Button>
							</div>
						  </CardContent>
						</Card>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}
export default SignIn;