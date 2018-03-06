import React, { Component } from "react";
import { Link ,Redirect} from 'react-router-dom';
import {  Glyphicon } from "react-bootstrap";
import"./productList.css"
class ProductList extends Component {
        handleClick=(e)=>{
            const num =Number(e.target.id);
    
                this.props.handlePaginateClick(num);
            
        }
    TableRow = (prod) => {
        return (
            <tr>
                <td>{prod.id}</td>
                <td>{prod.productName}</td>
              
                <td>{prod.price}</td>
                <td>{prod.size}</td>
                <td>{prod.touchScreen}</td>
                <td><Link to="/edit-product"><button
                    onClick={() => { this.props.onEdit(prod) }}>
                  Edit <Glyphicon glyph="edit"/> </button></Link>
                  </td>
                  <td>
                    <button className="deleteButton"
                        onClick={() => { this.props.onDelete(prod) }}> 
                        Delete <Glyphicon glyph="remove-circle" /> </button></td>
            </tr>
        )
    }
    Table = (currentTodos) => {
        return (<table border="1" className="tableBorder">
            <thead>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Size</th>
                <th>TouchScreen</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            {currentTodos.map(prod => {
                return this.TableRow(prod);
            })}
        </table>);
    }
    tableDisplay = (products,currentPageNum,contentNumber) => {
    
        // Logic for displaying current todos
        const indexOfLastTodo = currentPageNum * contentNumber;
        const indexOfFirstTodo = indexOfLastTodo - contentNumber;
        const currentTodos = products.slice(indexOfFirstTodo,
            indexOfLastTodo);
        return (
            this.Table(currentTodos)
        )
        // Logic for displaying page numbers
    }
    paginate = (products,contentNumber) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / contentNumber); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <button className="display"
                key={number}
                id={number}
                onClick={this.handleClick}
            >
            
                {number}
            </button>

            );
        });
        return (
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        )
    }
    render() {
        return (
            <div>
               
                <h1>Product List</h1>
                <Link to="/add-product"><button className="addProductButton">Add New Product <Glyphicon glyph="plus-sign"/> </button></Link>
                {this.tableDisplay(this.props.products,this.props.currentPageNum,this.props.contentNumber)}
                {this.paginate(this.props.products,this.props.contentNumber)}
                <Redirect to="/" />
            </div>
        )

    }
}
export default ProductList;


