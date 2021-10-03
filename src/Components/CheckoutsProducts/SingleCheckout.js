import React from "react";
const SingleCheckout = (props) => {
    let qty = 1;
    let stock = props.stock;
    const stockChange = (e) => {
        console.log(e.target.value);
    }
    const minus = () =>{
        //
    }

    const plus = () => {
        stock += qty;
    }
    
    return(
        <div className="card">
            <div className="row center">
                <div className="col-2 p-0">
                    <div className="product_name">{props.title}</div>
                </div>
                <div className="col-1 p-0">
                    <form action="">
                        <div className="control">
                            <button type="button" className="bttn bttn-left" id="minus" onClick={minus}>
                                <span>-</span>
                            </button>
                            <input
                                type="number"
                                className="input"
                                id="input"
                                value={stock}
                                onChange={stockChange}
                            />
                            
                            
                            <button type="button" className="bttn bttn-right" id="plus" onClick={plus}>
                                <span>+</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-1 p-0">
                    <div className="product_price">{props.price * props.stock} MMK</div>
                </div>
                <div className="col-1 p-0">
                    <button className="del">x</button>
                </div>
            </div>
        </div>
    );
}
export default SingleCheckout;