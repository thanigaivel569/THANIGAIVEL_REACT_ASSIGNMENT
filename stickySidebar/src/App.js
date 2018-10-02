import React, { Component } from 'react';
import Footer from "./footer"
import { Grid, Col, Row } from 'react-bootstrap';
import { flatten, times, range } from 'lodash';
import { StickyContainer, Sticky } from 'react-sticky';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {

    const NUMBER_OF_PARAGRAPHS = 15;
    const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) => 
      (<p key={index}>Flipkart Pvt Ltd. is an Indian electronic commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal (no relation) in 2007, the company initially focused on book sales, before expanding into other product categories such as consumer electronics, fashion, and lifestyle products.Flipkart maintains several house brands, including Citron (home appliances) and Digiflip (formerly for electronics and accessories).[102] In 2017, Flipkart launched additional brands, including Billion (smartphones),[103] Smartbuy (electronics accessories, effectively replacing Digiflip),[104] and MarQ (for large appliances, although its launch was faced with a trademark dispute with an existing company, Marc Enterprises)</p>)
    ));

    const NUMBER_OF_FLIPKART = 7;
    const flipkart = range(0, NUMBER_OF_FLIPKART).map((i) => {
      return (
          <div className="sidebar-flipkart" key={i}>
            <StickyContainer style={{zIndex: 2}}>
              <Sticky>
                <img src="http://quebecnewstribune.com/wp-content/uploads/2017/09/Flipkart-Deals.jpg" alt="flipkart" />
              </Sticky>
              <div style={{height: "300px"}}></div>
            </StickyContainer>
          </div>
      )
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Flipkart</h2>
        </div>
        <div className="App-intro">
          <Grid>
            <Row className="show-grid">
              <Col lg={8}>
                {paragraphs.map(paragraph => paragraph)}
              </Col>
              <Col lg={4}>{flipkart}</Col>
            </Row>
          </Grid>
        </div>
         <Footer/>
      </div>
    );
  }
}

export default App;
