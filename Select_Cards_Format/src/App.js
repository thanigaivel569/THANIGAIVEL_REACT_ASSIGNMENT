import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as SelectPlanActions from './Action/SelectPlanAction';
import { withRouter, Route, Switch } from "react-router-dom";
import SelectPlanList from './Components/SelectPlanList';
import ReferralCode from './Components/ReferralCode';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Get Started by selecting a plan type that best describes your health coverage needs"
      
    }
  }
  componentWillMount() {
    this.props.actions.getSelectPlan();
  }

  render() {
    return (
      <div className="App">
        
        <Switch>
        <Route exact path="/" component= {ReferralCode}/>
          <Route
            exact
            path="/SelectPlan"
            render={props =>
              this.props.isLoading ? (
                <p>Loading...</p>
              ) : (
                  <SelectPlanList
                    {...props}
                    selectPlan={this.props.selectPlan}
                    name={this.state.value}

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
    selectPlan: state.selectPlanInfo.SelectPlan,
    isLoading: state.selectPlanInfo.isLoading

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SelectPlanActions, dispatch)
  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

