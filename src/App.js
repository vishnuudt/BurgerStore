import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Switch>
            <Route path='/orders' component={Orders} />
            <Route path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>     
      </div>
    );
  }
}

export default App;
