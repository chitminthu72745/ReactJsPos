import React from "react";
import SingleProduct from "./SingleProduct";
const ShowProducts = (props) => {
    const productHandler = (productsData) => {
        const productDatas = {
            ...productsData
        }
        props.saveProductHandler(productDatas);
    }
    return(
        <div className="product_list_row">
            {
                props.products.map((product) => {
                    return(
                        <SingleProduct key={product.id} stock={product.stock} id={product.id} title={product.title} price={product.price} productHandler={productHandler} />
                    )
                })
            }
        </div>
    );
}
export default ShowProducts;