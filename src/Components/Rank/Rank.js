import React from 'react';


const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{'Dilly, you\'re ranked ... ' }
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}
export default Rank;