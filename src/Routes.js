import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import CreatorApply from './Pages/CreatorApply/CreatorApply';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:id" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/apply" component={CreatorApply} />
          {/* <Route exact path="/product" component={ProductDetail} /> */}
          {/* <Route exact path="/product:id" component={ProductDetail} /> */}
          <Route exact path="/reviewupload" component={ReviewUpload} />

          {/* <Route exact path="/search" component={Search} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
