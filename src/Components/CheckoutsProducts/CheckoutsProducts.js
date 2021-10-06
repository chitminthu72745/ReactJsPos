import React, {useState} from "react";
import SingleCheckout from "./SingleCheckout";
const CheckoutsProducts = (props) => {
    let total = 0;
    const [totalPrice,setTotalPrice] = useState(props.price);
    const [payPrice,setPayPrice] = useState(0);
    const priceall = (ppp) => {
        setTotalPrice(
            total += ppp.price
        );
    }

    const payment = (e) => {
        if(totalPrice < e.target.value){
            setPayPrice(e.target.value - totalPrice);
        }else{
            setPayPrice(0);
        }
    }
    return(
        <div className="product_table_row">
            <div className="product_table_list">
                {
                    props.checkOutProducts.map((checkProduct)=>{
                        return(
                            <SingleCheckout key={checkProduct.id} stock={checkProduct.stock} title={checkProduct.title} price={checkProduct.price} priceall={priceall} />
                        )
                    })
                }
            </div>
            <div className="total_table">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Sub Total</th>
                            <td>Ks {totalPrice}</td>
                        </tr>
                        <tr>
                            <th>Advance Payment</th>
                            <td>
                                <div>
                                    <input
                                        type="text"
                                        className="customer_table_payment_input"
                                        onChange={payment}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>Ks {payPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CheckoutsProducts