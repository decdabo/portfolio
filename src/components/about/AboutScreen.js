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
							<p
							 className="about__text"
							>
								Me llamo David Caro nací en Abril de 1998.<br/> 
								Actualmente vivo en Bahía Blanca, Buenos Aires.<br/>
								Empecé a estudiar de manera autodidacta<br/>
								programación en febrero del 2021 pero ya conocía<br/>
								algo de HTML y CSS.<br />
								<br />
								Tengo conocimientos de edición de video e imágenes<br/>
								música, todo aprendido desde la modalidad<br/>
								de autodidacta. Todo lo que se ve en el sitio web<br/>
								está hecho por mi mano (exceptuando el gif de travolta)<br />
								<br />
								Espero el sitio web sea de su agrado.
							</p>	
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
