import React , {useState} from "react";
const ProductForm = (props) => {
    const [titleValue, setTitleValue] = useState ("");
    const [priceValue, setPriceValue] = useState ("");
    const titleChangeHandler = (event) => {
        setTitleValue(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setPriceValue(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            title : titleValue,
            price : priceValue,
        };
        props.addProduct(newProduct);
        setTitleValue("");
        setPriceValue("");
    }
    return (
        <form className="form-mt" onSubmit={submitHandler} >
            <div className="row center product_name mb">
                <div className="col-1">
                    <span>Product Name</span>
                </div>
                :
                <div className="col-2">
                    <input type="text" className="name_box ml-2" value={titleValue} onChange={titleChangeHandler}  />
                </div>
            </div>
            <div className="row center product_name mb">
                <div className="col-1">
                    <span>Product Price</span>
                </div>
                :
                <div className="col-2">
                    <input type="number" className="name_box ml-2" value={priceValue} onChange={priceChangeHandler}  />
                </div>
            </div>
            <div>
                <button className="create_btn" type="submit">Create</button>
            </div>
        </form>
    );
}
export default ProductForm;