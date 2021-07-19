import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Badges from '../pages/badges/Badges'
import BadgeNew from '../pages/badgeNew/BadgeNew'

const RouterOutlet = (props) => {
    return(
        <Router>
            <Switch>
                <Route exact path="/badges" component={Badges}></Route>
                <Route exact path="/badges/new" component={BadgeNew}></Route>
                <Redirect from="/" to="/badges" />
            </Switch>
        </Router>
    );
}

export default RouterOutlet;