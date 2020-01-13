import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from "./containers/Auth/Logout/Logout";

const asyncCheckOut = asyncComponent(()=> {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});



class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    let routes = null;
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckOut}/>
          <Route path="/orders" component={asyncOrders}/>
          <Route path="/auth" component={asyncAuth}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to='/' />
        </Switch>
      );
    } else {
      routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to='/' />
      </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
