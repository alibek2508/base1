import { useState } from 'react';
export const Calc = () => {
	const [firstNum, setFirstNum] = useState(0);
	const [numberOne, setNumberOne] = useState(null);
	const [numberTwo, setNumberTwo] = useState(null);

	const handleNumberOne = e => {
		if (isNaN(e.target.value)) {
			return setNumberOne(null);
		}
		setNumberOne(e.target.value);
	};
	const handleNumberTwo = e => {
		if (isNaN(e.target.value)) {
			return setNumberTwo(null);
		}
		setNumberTwo(e.target.value);
	};

	const handleAddition = () => {
		setFirstNum(Number(numberOne) + Number(numberTwo));
		setNumberOne('');
		setNumberTwo('');
	};
	const handleSubtraction = () => {
		setFirstNum(numberOne - numberTwo);
		setNumberOne('');
		setNumberTwo('');
	};
	const handleMultiplication = () => {
		setFirstNum(numberOne * numberTwo);
		setNumberOne('');
		setNumberTwo('');
	};
	const handleDivision = () => {
		if (numberTwo === 0) {
			return setFirstNum(null);
		}
		setFirstNum((numberOne / numberTwo).toFixed(2));
		setNumberOne('');
		setNumberTwo('');
	};
	return (
		<>
			<h1>Калькулятор</h1>
			<input
				type="text"
				className="calc number"
				value={numberOne}
				onChange={handleNumberOne}
			/>
			<input
				type="text"
				className="calc number"
				value={numberTwo}
				onChange={handleNumberTwo}
			/>
			<span className="number"> = {firstNum}</span>
			<div className="btn_container">
				<button className="btn" onClick={handleAddition}>
					+
				</button>
				<button className="btn" onClick={handleSubtraction}>
					-
				</button>
				<button className="btn" onClick={handleMultiplication}>
					*
				</button>
				<button className="btn" onClick={handleDivision}>
					/
				</button>
			</div>
		</>
	);
};
