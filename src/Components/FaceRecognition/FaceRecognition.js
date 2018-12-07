import React from 'react';
import './FaceRecognition.css';

const styles = {
	image: {
		paddingBottom: 10
	}
}

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center'>
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' style={styles.image} />
				<div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	);
}
export default FaceRecognition;