import React from 'react';
import './ImageLinkForm.css';
import { TextField, Button } from '@material-ui/core'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3' style={{textColor: '#FFFFFF'}}>
				{'This Magic Brain will detect faces, give it a try'}
			</p>
			<div className='center'>
				<div className=' form center'>
					<TextField label="Link" className='center w-70' type='tex' onChange={onInputChange}/>
					<Button variant="outlined"
						onClick={onButtonSubmit}
					>Detect</Button>
				</div>	
			</div>
		</div>
	);
}
export default ImageLinkForm;