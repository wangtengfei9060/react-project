import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayOut from './components/layout'
import { View as Login} from './containers/login/'
import store from './store/'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" component={LayOut} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
