import Navbar from './Navbar';
import { baseUrl } from '../utils/constants';
import ReactPlayer from 'react-player';

const MovieDetails = ({ movie, showPlayer, setShowPlayer, trailerURL }) => {
	return (
		<>
			<Navbar />
			<div className="overflow-hidden">
				<div className="py-32">
					<div className={`banner__image absolute top-0 h-full w-full -z-10`}>
						<img
							src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
							alt="movie-poster"
							className="object-cover h-full w-full"
						/>
					</div>

					<div className="banner__content px-4 text-white sm:px-6">
						<h1 className="banner__title text-3xl font-bold">
							{movie?.title || movie?.name || movie?.original_name}
						</h1>
						<p className="banner__description max-w-md text-md mt-5 sm:max-w-lg">
							{movie?.overview}
						</p>
					</div>

					<div className="banner__buttons flex space-x-3 px-4 mt-5 sm:px-6">
						<button
							onClick={() => setShowPlayer(true)}
							className="bg-white text-black py-2 px-6 rounded-md"
						>
							Play
						</button>
						<button className="bg-[gray]/70 px-6 py-2 rounded-md">
							More Info
						</button>
					</div>
				</div>

				<div
					className={`player__container absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
						showPlayer ? 'opacity-100 z-50' : 'opacity-0 -z-10'
					}`}
				>
					<div className="flex items-center flex-col justify-between bg-gray-700 text-[#f9f9f9]">
						<div className="trailer__heading flex justify-between items-center w-full p-3.5">
							<h1>Play Trailer</h1>
							<button onClick={() => setShowPlayer(false)}>X</button>
						</div>
						<div className="trailer-video__container w-full h-[400px]">
							<ReactPlayer
								url={trailerURL}
								width="100%"
								height="100%"
								controls={true}
								playing={showPlayer}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
