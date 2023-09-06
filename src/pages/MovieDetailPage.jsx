import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../utils/requests';
import MovieDetails from '../components/MovieDetails';

const MovieDetailPage = () => {
	const [showPlayer, setShowPlayer] = useState(false);
	const [movie, setMovie] = useState();
	const params = useParams();

	useEffect(() => {
		const fetchMovie = async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
			);
			const data = await response.json();
			setMovie(data);
		};
		fetchMovie();
	}, []);

	const trailerIndex = movie?.videos.results.findIndex(
		(element) => element.type === 'Trailer'
	);
	const trailerURL = `https://www.youtube.com/watch?v=${movie?.videos?.results[trailerIndex]?.key}`;

	console.log(trailerURL);
	return (
		<>
			<MovieDetails
				movie={movie}
				showPlayer={showPlayer}
				setShowPlayer={setShowPlayer}
				trailerURL={trailerURL}
				height="h-full"
			/>
		</>
	);
};

export default MovieDetailPage;
