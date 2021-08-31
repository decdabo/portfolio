import React from 'react';
import { useParallax } from '../../helpers/useParallax';

export const HomeScreen = (e) => {
	
	const [hatX, hatY] = useParallax(e, 300, 300);

	const [wallX, wallY] = useParallax(e, -700, 700);

	return (
		<div 
			className="home__home-container"
			style={{ 
				backgroundImage:'url(assets/screens/home.jpg)',
				transform: `translateX(${wallX}px) translateY(${wallY}px)` 
			}}
		>
			<div className="home__home-main">
				<div className="home__text">
					<div className="home__name-container">
						<div className="home__name animate__animated animate__slideInLeft animate__delay-1s">
							<h1>
								David
							</h1>
							<h3>
								Caro
							</h3>
						</div>							
					</div>
					<div className="home__portfolio-box animate__animated animate__slideInRight animate__delay-2s">
						<div className="home__portfolio">
							<h2>Portfolio</h2>
						</div>
					</div>
				</div>
				<div className="home__home-img-container animate__animated animate__fadeInUp">
					<img
						className="home__home-logo"
						src="assets/logo/logo.png"
						alt="logo" 
						style={{transform: `translateX(${hatX}px) translateY(${hatY}px)`}}
					/>
				</div>
			</div>
		</div>
	)
}
