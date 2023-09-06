import { Link } from 'react-router-dom';

const Thumbnail = ({ backdropPath, posterPath, movieId }) => {
	return (
		<>
			<Link
				to={`/movie/${movieId}`}
				className="h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105"
			>
				<img
					src={`https://image.tmdb.org/t/p/w500${backdropPath || posterPath}`}
					className="rounded-sm object-cover"
					alt="movie poster"
				/>
			</Link>
		</>
	);
};

export default Thumbnail;
