import React, { Component } from 'react';

import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>     
      </div>
    );
  }
}

export default App;
