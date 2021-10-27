import { useEffect, useState } from 'react'

export const useParallax = (e, sX, sY) => {

	const [parallaxX, setParallaxX] = useState(0);

	const [parallaxY, setParallaxY] = useState(0);

	const handleScrollX = (e) => setParallaxX((window.innerWidth - e.pageX*-5)/sX);

	const handleScrollY = (e) => setParallaxY((window.innerHeight - e.pageY*-5)/sY);

	useEffect(() => {
		window.addEventListener('mousemove', handleScrollX);
		window.addEventListener('mousemove', handleScrollY);
		return () => {
			window.addEventListener('mousemove', handleScrollX);
			window.addEventListener('mousemove', handleScrollY);
		}
		// eslint-disable-next-line
	}, []);


    return [parallaxX, parallaxY];
}

