import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/movie/:id', element: <MovieDetailPage /> },
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
