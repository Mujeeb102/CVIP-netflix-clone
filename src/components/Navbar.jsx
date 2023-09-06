import logo from '../assets/logo-full.png';
import avatar from '../assets/avatar.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={`nav__container sticky top-0 w-full py-2 px-4 ${
					isScrolled ? 'bg-black' : ''
				} sm:px-6 lg:px-8 transition duration-500 z-20`}
			>
				<div className="nav__wrapper flex justify-between items-center ">
					<div className="nav__logo">
						<img
							src={logo}
							alt="netflix-logo"
							className="w-[80px] lg:w-[100px]"
						/>
					</div>
					<div className="nav__links hidden"></div>
					<div className="nav__avatar">
						<img src={avatar} alt="" className="w-[30px] lg:w-[40px]" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
