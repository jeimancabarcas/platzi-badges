import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Badges from '../pages/badges/Badges'
import BadgeNew from '../pages/badgeNew/BadgeNew'

class App extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;