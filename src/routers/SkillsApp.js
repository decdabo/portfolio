import React from "react";
import {
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { CssScreen } from "../components/skills/knowledge/CssScreen";

import { HtmlScreen } from "../components/skills/knowledge/HtmlScreen";
import { JsScreen } from "../components/skills/knowledge/JsScreen";
import { ReactScreen } from "../components/skills/knowledge/ReactScreen";
import { SassScreen } from "../components/skills/knowledge/SassScreen";
import { SkillsScreen } from "../components/skills/SkillsScreen";
import { useParallax } from "../helpers/useParallax";

export const SkillsApp = (e) => {

	const [wallX, wallY] = useParallax(e, 1000, 1000);

	return (
		<>
			<div 
			 className="skills___skills-router"
			 style={{
				backgroundImage:'url(assets/screens/skills.png)',
				transform: `translateX(${wallX}px) translateY(${wallY}px)`
			}}
			>
				<div className="skills__skills-black">
					<Switch>
						<Route exact path="/skills" component={SkillsScreen} />
						<Route path="/skills/html" component={HtmlScreen} />
						<Route path="/skills/css" component={CssScreen} />
						<Route path="/skills/javascript" component={JsScreen} />
						<Route path="/skills/react" component={ReactScreen} />
						<Route path="/skills/sass" component={SassScreen} />
						<Redirect to="/skills" />
					</Switch>
				</div>
			</div>
		</>
	);
}
