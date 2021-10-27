import React from 'react'
import { hideWork } from '../../helpers/hideWork'

export const WorksApp = () => {

	const handleWorkHide = () => {
		hideWork();
	}

	return (
		<div className="work__work-container" id="work__box">
			<div className="work__work-container-box">
				<div className="work__work-main">
					<h1 className="work__work-title-off">Restaurant App</h1>
					<a 
					 className="work__work-app"
					 href="https://decdabo.github.io/restaurantapp/" 
					 target="_blank"
					 rel="noreferrer"
					>
						<img
							className="work__work-app-img"
							src="assets/apps/app.gif" 
							alt="RestaurantApp"
						/>
					</a>
				</div>
				<div
					className="work__work-button"
					onClick={handleWorkHide}
				>
					<i className="fas fa-angle-up" />
				</div>
			</div>
		</div>
	);
}