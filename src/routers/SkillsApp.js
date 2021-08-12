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

export const SkillsApp = () => {
	return (
		<>
			<div className="skills___skills-router">
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
		</>
	);
}
