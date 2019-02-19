import React from 'react';
import LandingPage from "./landingPage";
import {Switch, Route} from "react-router-dom"
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from "./projects";
import Resume from './resume';

const Main = ()=>(
    <Switch>
        <Route exact path="/myportfoliosite" component={LandingPage}/>
        <Route path="/myportfoliosite/aboutme" component={AboutMe}/>
        <Route path="/myportfoliosite/contact" component={Contact}/>
        <Route path="/myportfoliosite/projects" component={Projects}/>
        <Route path="/myportfoliosite/resume" component={Resume}/>
    </Switch>
)

export default Main;