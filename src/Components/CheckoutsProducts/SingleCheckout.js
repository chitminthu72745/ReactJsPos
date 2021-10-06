import React ,{useState} from "react";
const SingleCheckout = (props) => {    
    let stock = props.stock;
    const [enterAmount,subEnderAmount] = useState(stock);
    const amountChangeHandler = (event) =>{
        subEnderAmount(event.target.value);
    };
    const plus = () => { subEnderAmount(enterAmount + 1); }
    const minus = () => { if(enterAmount > 1){ subEnderAmount(enterAmount - 1); }}
    const pricealls = {
        price : props.price * enterAmount
    }
    props.priceall(pricealls);

    return(
        <div className="card">
            <div className="row center">
                <div className="col-2 p-0">
                    <div className="product_name">{props.title}</div>
                </div>
                <div className="col-1 p-0">
                    <form action="">
                        <div className="control">
                            <button type="button" className="bttn bttn-left" onClick={minus}>
                                <span>-</span>
                            </button>
                            <input
                                type="number"
                                className="input"
                                id="input"
                                min="1" 
                                step="1"
                                value={enterAmount}
                                onChange={amountChangeHandler}
                            />
                            <button type="button" className="bttn bttn-right" onClick={plus}>
                                <span>+</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-1 p-0">
                    <div className="product_price">{props.price * enterAmount} MMK</div>
                </div>
                <div className="col-1 p-0">
                    <button className="del">x</button>
                </div>
            </div>
        </div>
    );
}
export default SingleCheckout;