import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Auth/Dashboard';
import Details from './pages/Auth/Details';

function App() {
	return (
    <div className="App">
     <Router>
			<Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/Details" component={Details} />
        </Switch>
        </Router>
		</div>
	);
}

export default App;
