import React, { useState } from 'react';
import { LoadingScreen } from './components/load/LoadingScreen';
import { AppRouter } from './routers/AppRouter';

export const PortApp = () => {

	const [load, setLoad] = useState(true);

	setTimeout(() => {
		setLoad(false);
	}, 2300);

	return (
		<>
		{ 
			( load ) 
			? ( <LoadingScreen/> )
			: ( <AppRouter /> )
		}
		</>
	);
}