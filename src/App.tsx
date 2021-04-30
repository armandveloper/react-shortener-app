import { lazy, Suspense } from 'react';
import GlobalStyles from './styles/globalStyles';
import LoadingScreen from './components/LoadingScreen';
const Content = lazy(() => import('./components/Content'));

function App() {
	return (
		<>
			<GlobalStyles />
			<Suspense fallback={<LoadingScreen />}>
				<Content />
			</Suspense>
		</>
	);
}

export default App;
