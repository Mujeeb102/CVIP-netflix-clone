import { useEffect, useRef, useState } from 'react';
import Thumbnail from './Thumbnail';

const Row = ({ title, fetchUrl }) => {
	const [movies, setMovies] = useState([]);
	const rowRef = useRef(null);

	const handleClick = (direction) => {
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;
			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const fetchMovieData = async () => {
			const response = await fetch(fetchUrl);
			const data = await response.json();
			setMovies(data.results);
		};

		fetchMovieData();
	}, []);

	return (
		<>
			<div className="space-y-1 md:space-y-2 mb-5">
				<h2 className="w-full px-4 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
					{title}
				</h2>

				<div className="group relative pl-4">
					<div
						className="movies__row flex items-center space-x-0.5 overflow-x-scroll overflow-y-hidden md:space-x-2.5 md:p-2"
						ref={rowRef}
					>
						{movies.map((movie) => (
							<Thumbnail
								key={movie?.id}
								backdropPath={movie?.backdrop_path}
								posterPath={movie?.poster_path}
								movieId={movie?.id}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Row;
