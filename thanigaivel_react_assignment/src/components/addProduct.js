import React, { Component } from 'react';
import"./addProduct.css";

class AddProduct extends Component {
  render() {
    return (
      <div>
           <h1>Add Product</h1>
        <hr/>
        <label>Product ID:</label>
        <input type="text" name="id" onChange={(e)=>{this.props.onChangeAdd(e)}}/><br/>
        <label>Product Name:</label>
        <input type="text" name="productName" onChange={(e)=>{this.props.onChangeAdd(e)}}/><br/>
        <label>Price:</label>
        <input type="text" name="price" onChange={(e)=>{this.props.onChangeAdd(e)}}/><br/>
        <label>Size:</label>
        <input type="text" name="size" onChange={(e)=>{this.props.onChangeAdd(e)}}/><br/>
        <label>Touchscreen:</label>
        <input type="text" name="touchScreen" onChange={(e)=>{this.props.onChangeAdd(e)}}/><br/>
        <label>Submit:</label>
        <button className="saveButton" onClick={()=>{this.props.onClickAdd(this.props.tempProd)}} >
        SAVE
        </button>

      </div>
    );
  }
}

export default AddProduct;
