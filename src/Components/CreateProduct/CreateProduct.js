import React from "react";
import ProductForm from "./ProductForm";
const CreateProduct = (props) => {
    const saveNewProduct = (enterNewProduct) => {
        const addNewProduct = {
            ...enterNewProduct,
            id : `p${props.allProducts.length + 1}`,
            stock : 1
        };
        props.productHandler(addNewProduct);
    }
    return (
        <ProductForm addProduct={saveNewProduct} />
    );
}
export default CreateProduct;