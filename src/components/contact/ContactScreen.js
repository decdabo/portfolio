import React from 'react'
import { useEmail } from '../../helpers/useEmail';
import { useParallax } from '../../helpers/useParallax';

export const ContactScreen = (e) => {

	const [email, setTheEmail] = useEmail();

	const [wallX, wallY] = useParallax(e, 1000, 1000);

	return (
		<div 
		 className="contact__contact-container"
		 style={{
			backgroundImage:'url(assets/screens/contact.jpg',
			transform: `translateX(${wallX}px) translateY(${wallY}px)`
		}}
		>
			<div className="contact__contact-black">
				<div className = "contact__title-cointeiner">
					<h1 className = "contact__title">Contact me</h1>
					<div className = "contact__title-line animate__animated animate__zoomIn"/>
				</div>

				<div className="contact__icons-container animate__animated animate__fadeInUp">
					<a 
					className="contact__icon in"
					href="https://www.linkedin.com/in/david-caro-a5028621a/"
					target="_blank"
					rel="noreferrer"
					>
						<i className="fab fa-linkedin"/>
					</a>
					<a
					className="contact__icon outlook"
					href="mailto:david.caro.dec@hotmail.com"
					target="_blank"
					rel="noreferrer"
					onClick={ ()=>setTheEmail() }
					>
						<i className="fas fa-envelope-square"/>
					</a>
					<a
					className="contact__icon git"
					href="https://github.com/decdabo"
					target="_blank"
					rel="noreferrer"
					>
						<i className="fab fa-github-square"></i>
					</a>
				</div>

				<div className={ email }>
					<h1>david.caro.dec@hotmail.com</h1>
				</div>
			</div>
		</div>
	);
}