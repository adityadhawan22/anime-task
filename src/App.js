import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import { Provider } from 'react-redux'
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={'*'} component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
