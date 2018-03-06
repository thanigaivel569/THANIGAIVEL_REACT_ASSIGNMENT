import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, EDIT_SUCCESS_PRODUCT } from "../actionTypes/products";
import { getProductsSuccess, getProductsFailure } from "../actionCreators/products";
function* getProducts() {
    let url = "http://localhost:4000/products";
    try {
        let products = yield fetch(url).then(r =>
            r.json()
        );
        yield put(getProductsSuccess(products));
    } catch (error) {
        yield put(getProductsFailure(error));
    }
}
function* addProduct(action) {

    console.log(action.productAdd);
    try {
        let product = yield fetch("http://localhost:4000/products", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.productAdd)
        }).then(result => result.json());

        yield put(getProductsSuccess(product));
    }
    catch (error) {
        yield put(getProductsFailure(error));
    }
}
function* deleteProduct(action) {

    console.log(action.prod.id);
    try {
        let product = yield fetch(`http://localhost:4000/products/${action.prod.id}`, {
            method: 'DELETE'
        }).then(result => result.json());
        yield put(getProductsSuccess(product));
    }
    catch (error) {
        yield put(getProductsFailure(error));
    }
}
function* editSuccessProduct(action) {

    try {
        let product = yield fetch(`http://localhost:4000/products/${action.editProducts.id}`, {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.editProducts)
        }).then(result => result.json());
        yield put(getProductsSuccess(product));
    }
    catch (error) {
        yield put(getProductsFailure(error));
    }
}

export function* getProductsWatcher() {
    yield [takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(DELETE_PRODUCT, deleteProduct),
    takeLatest(ADD_PRODUCT, addProduct),
    takeLatest(EDIT_SUCCESS_PRODUCT, editSuccessProduct)];
}
