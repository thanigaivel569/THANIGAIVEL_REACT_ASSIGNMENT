import React, { Component } from 'react';
import"./editProduct.css";
class EditProduct extends Component {  
 render() {
    return (
      <div>
      <h1>Edit Product</h1>
        <hr/>
        <label>Product ID:</label>
        <input type="text" name="productName" onChange={(e)=>{this.props.onChangeEdit(e)}}
        defaultValue={this.props.editProducts.id} /><br/>
        <label>Product Name:</label>
        <input type="text" name="productName" onChange={(e)=>{this.props.onChangeEdit(e)}}
        defaultValue={this.props.editProducts.productName} /><br/>
        <label>Price:</label>
        <input type="text" name="price" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.price} /><br/>
        <label>Size:</label>
        <input type="text" name="size" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.size} /><br/>
        <label>TouchScreen:</label>
        <input type="text" name="touchScreen" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.touchScreen} /><br/>
        <label>Submit:</label>
        <button className="saveButton" onClick={(e)=>{this.props.onClickEdit(this.props.editProducts)}}>Save</button>
        </div>
    );
  }
}

export default EditProduct;
