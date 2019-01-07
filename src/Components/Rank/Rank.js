import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import './Rank.css'

const styles = {
	outerCon: {
		width: "100%",
		color: "#FFFFFF",
		zIndex: "2",
		position: "relative",
		marginLeft: "auto",
		paddingTop: "20vh",
		paddingLeft: "15px",
		marginRight: "auto",
		paddingRight: "15px",
	},
	innerCon: {
		width: "1000px",
		marginLeft: "-15px",
		marginRight: "-15px",
		justifyContent: "center",
		display: "flex",
		flexWrap: "wrap",
		boxSizing: "border-box",
	},
	box: {
		maxWidth: "83.3333%",
		flexGrow: 0,
		flexBasis: "83.3333%",
		position: "relative",
		paddingLeft: "15px",
		paddingRight: "15px", 
	},
	mainPaper: {
		padding: "40px 0px",
		boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
		borderRadius: "6px",
		marginBottom: "100px",
		color: "rgba(0, 0, 0, 0.87)",
		width: "100%",
		border: 0,
		display: "flex",
		position: "relative",
		fontSize: ".875rem",
		marginTop: "30px",
		background: "#FFF",
		flexDirection: "column",
	},
	h2: {
		fontSize: "2.25rem",
		lineHeight: "1.5em",
	},
	content: {
		flex: "1 1 auto",
		padding: "0.9rem 1.8rem",
	},
	textField: {
		width: "100%",
		boxSizing: "border-box",
		fontWeight: "300",
		textOverflow: "ellipsis",
		transition: ".4s all"
	},
	wrapper: {
		display: "inline-block",
		position: "relative",
		width: "500px"
	},
	button: {
		position: "relative",
		width: "500px",
		borderRadius: "3px",
		boxSizing: "border-box",
		marginTop: "20px",
		height: "50px",
	},
}


const Rank = ({entries, classes, onButtonSubmit, onInputChange, box, imageUrl }) => {

	return (
		<div>
			<div className={classes.outerCon}> 
				<div className={classes.innerCon}>	
					<div className={classes.box}> 
						<div className={classes.mainPaper}>
							<h2 className={classes.h2}>
								Let's detect a face
							</h2>
						<div className={classes.content}>
							You're total entry count: <Typography variant="display1">{entries}</Typography>
							<div className={classes.wrapper}>
								<TextField label="Paste your link" className={classes.textField} type='tex' onChange={onInputChange}/>
							</div>
							<div className={classes.wrapper}>
								<Button 
									color="primary"
									onClick={onButtonSubmit}
									className={classes.button}
									variant="outlined"
								>
									Detect
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' style={styles.image} />
			<div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
		</div>
	</div>
	);
}
export default withStyles(styles)(Rank);