import { requests } from '../utils/requests';
import Banner from '../components/Banner';

const HomePage = () => {
	return (
		<>
			<Banner moviePosters={requests.fetchMoviePosters} />
		</>
	);
};

export default HomePage;
