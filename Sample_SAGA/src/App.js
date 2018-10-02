import React, { Component } from 'react';
import logo from './logo.svg';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './App.css';
import Hello from './Component/Hello'
import * as productActions from './Action/ProductAction';
import { withRouter,Route, Switch, Link} from "react-router-dom";
import ProductList from './Component/ProductList';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : "Hello Components Sample Saga"

    }
  }
 componentWillMount(){
  this.props.actions.getProduct();
 }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name={this.state.value} />
        <Link to="/">
        {/* <input type ="text"/> */}
         <button type="button">Get Back</button></Link>
        <Switch>
        <Route
            exact
            path="/data"
            render={props =>
              this.props.isLoading ? (
                <p>Loading...</p>
              ) : (
                <ProductList
                  {...props}
                  products={this.props.products}
                />
              )
            }
          />

          </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products:state.productsInfo.Products,
    isLoading: state.productsInfo.isLoading

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

