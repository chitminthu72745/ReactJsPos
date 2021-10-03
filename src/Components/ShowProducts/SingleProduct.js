import React from "react";
const SingleProduct = (props) => {
    const addToCard = (e) => {
        e.preventDefault();
        const checkOutProduct = {
            id : props.id,
            title : props.title,
            stock : props.stock,
            price : props.price
        };
        props.productHandler(checkOutProduct);
    }
    return(
        <div className="width-10 single_product">
            <form onSubmit={addToCard}>
                <h3>{props.title}</h3>
                <p>{props.price} MMK</p>
                <button className="add_to_cart">Add To Cart</button>
            </form>
        </div>
    )
}
export default SingleProduct;