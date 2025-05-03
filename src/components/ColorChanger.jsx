import { useState } from 'react';
export const ColorChanger = () => {
	const [backgroundColor, setBackgroundColor] = useState('white');
	const handleColorRed = () => {
		setBackgroundColor('red');
	};
	const handleColorBlue = () => {
		setBackgroundColor('blue');
	};
	return (
		<>
			<div
				style={{
					width: '200px',
					height: '200px',
					border: '1px solid black',
					backgroundColor: backgroundColor,
					marginBottom: '10px',
				}}
			></div>
			<button onClick={handleColorRed}>Red</button>
			<button onClick={handleColorBlue}>Blue</button>
		</>
	);
};
