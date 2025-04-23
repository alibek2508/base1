import './App.css';
import { UserProfile } from './components/UserProfile';
function App() {
	return (
		<div>
			<UserProfile name="Борис" age={30} />
			<UserProfile name="Елена" age={25} />
			<UserProfile name="Максим" age={35} />
		</div>
	);
}

export default App;
