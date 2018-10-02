import React, { Component } from 'react';
import { Button } from 'reactstrap';
import "./SelectPlanList.css"

class SelectPlanList extends Component {

  selectPlanList() {
    return this.props.selectPlan.map((data, index) => (
      <div className="row" key={index}>
        < div className="column" >
          <h2>{data.planTitle} </h2>
          <p>{data.Description}</p>
          <Button className={"Size"} color="primary"  >Select</Button>
        </div>
      </div>
    ))
  }
  render() {
    return (
      <div>
      <h2>{this.props.name}</h2>
      <h4> {this.selectPlanList()}</h4>
      </div>
    );
  }
}

export default SelectPlanList;