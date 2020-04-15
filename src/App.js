import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom';
class App extends React.Component {
    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}>
                    </Route>
                );
            })
        }
        return <Switch>{result}</Switch>
    }
    render() {
        return (
            <Router>
                <div>
                    {/* Menu  */}
                    <Menu></Menu>
                    <div className="container">
                        <div className="row">

                            {this.showContent(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
