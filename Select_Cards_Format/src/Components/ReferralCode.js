import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ReferralCode.css';
class ReferralCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
          BannerText: "Get Started by entering your  Reference Code.",
          SubText:"Don't have a code? See Your Benefits."
        }
      }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form >
                    <h1>{this.state.BannerText}<br/></h1>
                    <h3>{this.state.SubText}<br/></h3>
                    <div className="align">
                    <input />
                    <button onClick={this.handleSubmit}>
                        <Link to="/SelectPlan"> submit </Link>
                    </button>
                    </div>
                </form>
            </div>

        );
    }
}

export default ReferralCode;
