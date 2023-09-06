import { useEffect, useState } from 'react';
import { API_KEY, requests } from '../utils/requests';
import MovieDetails from './MovieDetails';
import Row from './Row';

const Banner = ({ moviePosters }) => {
	const [movieData, setMovieData] = useState([]);
	const [movie, setMovie] = useState(null);
	const [trailer, setTrailer] = useState('');
	const [showPlayer, setShowPlayer] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(moviePosters);
			const data = await response.json();
			setMovieData(data.results);
		};

		fetchData();
	}, []);

	useEffect(() => {
		const mov = movieData[Math.floor(Math.random() * movieData.length)];

		fetch(
			`https://api.themoviedb.org/3/movie/${mov?.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
		)
			.then((res) => res.json())
			.then((data) => {
				const trailerIndex = data.videos.results.findIndex(
					(element) => element.type === 'Trailer'
				);

				const trailerURL = `https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`;
				setTrailer(trailerURL);
			});

		setMovie(mov);
	}, [movieData]);

	return (
		<>
			<MovieDetails
				movie={movie}
				showPlayer={showPlayer}
				setShowPlayer={setShowPlayer}
				trailerURL={trailer}
			/>
			<section className="mt-[200px] pb-10">
				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
				<Row title="Action Thriller" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			</section>
		</>
	);
};

export default Banner;
