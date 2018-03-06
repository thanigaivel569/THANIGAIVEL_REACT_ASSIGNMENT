import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, DELETE_PRODUCT, 
  DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, 
   ADD_PRODUCT, ADD_INPUT_CHANGE, EDIT_PRODUCT, EDIT_INPUT_CHANGES, EDIT_SUCCESS_PRODUCT, PAGINATE} from "../actionTypes/products";
export function getProducts() {
  return {
      type: GET_PRODUCTS
  };
}
export function getProductsSuccess(products) {
  return {
      type: GET_PRODUCTS_SUCCESS,
      products
  };
}
export function getProductsFailure(error) {
  return {
      type: GET_PRODUCTS_FAILURE,
      error
  };
}
export function addProduct(productAdd) {
  return {
      type: ADD_PRODUCT,
      productAdd
  };
}
export function addInputChange(addItem) {
  return {
      type: ADD_INPUT_CHANGE,
      addItem
  };
}
export function deleteProduct(prod) {
  return {
      type: DELETE_PRODUCT,
      prod
  };
}
export function deleteProductSuccess(products) {
  return {
      type: DELETE_PRODUCT_SUCCESS,
      products
  };
}
export function deleteProductFailure(error) {
  return {
      type: DELETE_PRODUCT_FAILURE,
      error
  };
}
export function editProduct(prod) {
  return {
      type: EDIT_PRODUCT,
      prod
      
  };
}
export function editInputChange(editItem) {
  return {
      type: EDIT_INPUT_CHANGES,
      editItem
  };
}
export function editSuccessProduct(editProducts) {
  return {
      type: EDIT_SUCCESS_PRODUCT,
      editProducts
  };
}
export function paginate(currentPage){
  return{
      type:PAGINATE,
      currentPage
  }
}
