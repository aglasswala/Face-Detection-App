import React, { Fragment } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	placeHolderTop: {
		flexGrow: 1
	},
	placeHolderBottom: {
		flexGrow: 1
	},
	signinBox: {
		width: "400px",
		background: "white",
		padding: "40px 0 33px 0",
		borderRadius: "5px",
		border: "1px solid #eeeeee",
		margin: "20vh auto"
	},
	signinContainer: {
		maxWidth: "340px",
		margin: "0 auto",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch"
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch"
	},
	wrapper: {
		display: "inline-block",
		position: "relative",
	},
	textField: {
		width: "100%",
		boxSizing: "border-box",
		fontWeight: "300",
		textOverflow: "ellipsis",
		transition: ".4s all"
	},
	button: {
		position: "relative",
		width: "100%",
		borderRadius: "3px",
		boxSizing: "border-box",
		marginTop: "20px",
	},
	actions: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        justifyContent: "space-between"
	},
	overlay: {
		width: "300px",
		background: "#2196f3",
		height: "50px",
		padding: "40px",
		marginTop: "-75px",
		marginLeft: "-20px",
		borderRadius: "6px"
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
		
		const { classes } = this.props

		return (
			<Fragment>
				 <div className={classes.placeHolderTop}>
					<div className={classes.placeHolderBottom}>
						<div className={classes.signinBox}>
							<div className={classes.signinContainer}>
								<div className={classes.container}>
									<div className={classes.overlay} style={{background: "primary"}}>
										<Typography variant="display1">
											Log In
										</Typography>
									</div>
									<form className={classes.form}>
										<span className={classes.wrapper}>
											<TextField 
													label="Name"
													className={classes.textField}
													onChange={this.onNameChange}
													style={{marginTop: "30px"}}
													margin="normal"
												/> 
										</span>
										<span className={classes.wrapper}>
											<TextField 
													label="Email"
													className={classes.textField}
													onChange={this.onEmailChange}
													margin="normal"
												/> 
										</span>
										<span className={classes.wrapper}>
											<TextField 
												label="Password"
												type="password"
												className={classes.textField}
												margin="normal"
								 				onChange={this.onPasswordChange}
											/> 
                                    	</span>
									</form>
									<span className={classes.wrapper}>
										<Button
												variant="contained"
												color="primary"
												className={classes.button}
												onClick={ this.onSubmitSignIn}
											>
												Submit
										</Button>
									</span>
									<div className={classes.actions}>
										<Button> Forgot Password?</Button>
										<Button
											onClick ={() => this.props.onRouteChange('register')}
										> Sign Up 
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				{/* <Grid 
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
						  	    	Register
						  	    </Typography>
						  	</div>
							<div >
								<br />
								<TextField
								  label="Name"
								  margin="normal"
								  onChange={this.onNameChange}
								  style={{marginTop: '120px', minWidth: 340}}
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
								<br />
							</div>
						  </CardContent>
						</Card>
					</Grid>
				</Grid> */}
			</Fragment>
		);
	}
}
export default withStyles(styles)(Register);