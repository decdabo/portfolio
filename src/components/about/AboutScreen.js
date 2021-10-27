import React from 'react'
import { useParallax } from '../../helpers/useParallax';

export const AboutScreen = (e) => {

	const [wallX, wallY] = useParallax(e, 1000, 1000);

	return (
		<div 
		 className="about__about-container" 
		 style={{
				backgroundImage:'url(assets/screens/about.jpg)',
				transform: `translateX(${wallX}px) translateY(${wallY}px)`
			}}
		>
			<div className="about__about-main">
				<div className="about__img-container animate__animated animate__fadeInLeft">
					<img 
					alt="dabo"
					className="about__img" 
					src="assets/img/dabo.png" 
					/>
				</div>
				<div className="about__main-container">
					<div className="about__title-container animate__animated animate__fadeInDown">
						<h1>About Me</h1>
						<div className="about__title-line animate__animated animate__zoomIn"/>
					</div>
					<div className="about__main animate__animated animate__fadeInUp">
						<div className="about__main-text">
							<div className="about__text">
								<p>
									Me llamo David Caro nací en Abril de 1998. 
									Actualmente vivo en Bahía Blanca, Buenos Aires.
									Empecé a estudiar de manera autodidacta
									programación en febrero del 2021 pero ya conocía
									algo de HTML y CSS.
									<br />
									Tengo conocimientos de edición de video e imágenes
									música, todo aprendido desde la modalidad
									de autodidacta. Todo lo que se ve en el sitio web
									está hecho por mi mano.
									<br />
									Espero el sitio web sea de su agrado.
								</p>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
