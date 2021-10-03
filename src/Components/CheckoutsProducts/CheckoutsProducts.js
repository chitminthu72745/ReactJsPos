import React from "react";
import SingleCheckout from "./SingleCheckout";
const CheckoutsProducts = (props) => {
    return(
        <div className="product_table_row">
            <div className="product_table_list">
                {
                    props.checkOutProducts.map((checkProduct)=>{
                        return(
                            <SingleCheckout key={checkProduct.id} stock={checkProduct.stock} title={checkProduct.title} price={checkProduct.price} />
                        )
                    })
                }
            </div>
            <div className="total_table">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Sub Total</th>
                            <td>10000 MMK</td>
                        </tr>
                        <tr>
                            <th>Advance Payment</th>
                            <td>
                                <div>
                                    <input
                                        type="text"
                                        className="customer_table_payment_input"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>100000 MMK</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CheckoutsProducts