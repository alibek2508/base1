import { useState } from 'react';
export const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		if (count === 0) {
			return setCount(0);
		}
		setCount(count - 1);
	};
	return (
		<>
			<h1>{count}</h1>
			<button onClick={increment}>Увеличить</button>
			<button onClick={decrement}>Уменьшить</button>
		</>
	);
};
