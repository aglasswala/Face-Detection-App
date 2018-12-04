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
		display: "flex",
		flexDirection: "column",
		minWidth: 375,
		width: "30vw",
	  	height: "67vh",
		fontSize: ".875rem",
		transition: "all 300ms linear"
	},
	overlay: {
		position: 'absolute',
		display: "flex",
		flexDirection: "column",
		borderRadius: "6px",
		paddingTop: 50,
		paddingBottom: 50,
		width: "25vw",
		heigth: "55vh",
		minWidth: 345,
		marginLeft: "-5px",
		marginTop: "-40px",
		border: "0",
		backgroundColor: '#2196f3',
		transition: "all 300ms linear"
	},
	text: {
		minWidth: 340,
		paddingTop: 11,
	}
}
class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://ancient-dawn-65122.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id) {
				this.props.loadUser(user)
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
					style={{minHeight: '100vh'}}
				>
					<Grid
						item
						xs={12} sm={12} md={4}
					> 
						<Card style={styles.card}>
						  <CardContent>
						    <div style={styles.overlay}>
						  	    <Typography variant="h4" color="primary" gutterBottom>
						  	    	Register
						  	    </Typography>
						  	</div>
							<div >
								<br />
								<TextField
								  label="Name"
								  margin="normal"
								  onChange={this.onNameChange}
								  style={{marginTop: '100px', minWidth: 340}}
								/>
								<br />
								<TextField
								  label="Email"
								  margin="normal"
								  style={styles.text}
								  onChange={this.onEmailChange}
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
								<div style={{paddingTop: 10}}>
									<Button style={{color: "#2196f3"}} onClick ={this.onSubmitSignIn}>
									 	Submit
									</Button>
								</div>
							</div>
						  </CardContent>
						</Card>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}
export default Register;