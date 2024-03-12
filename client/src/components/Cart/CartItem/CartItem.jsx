import "./CartItem.scss";

import {MdClose} from "react-icons/md"
import { useContext } from "react";
import { CategoriesContext } from "../../../utils/context";

const CartItem = () => {
    const {cartItems,handleRemoveFromCart,handleCartProductQuantity} = useContext(CategoriesContext)
    return (

        <div className="cart-products">
        {cartItems?.map((data) =>(

        <div key={data.id} className="cart-product">
            <div className="img-container">
                <img src={process.env.REACT_APP_DEV_URL + data?.attributes?.img?.data[0]?.attributes?.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{data.attributes.Title}</span>

                <MdClose className="close-button" size={18} onClick={() => handleRemoveFromCart(data)}/>
                <div className="quantity-buttons">
                <span onClick={()=>handleCartProductQuantity('dec',data)}>-</span>
                <span>{data.attributes.quantity}</span>
                <span onClick={()=>handleCartProductQuantity('inc',data)}>+</span>
                </div>
                <div className="text">
                    <span>{data.attributes.quantity}</span>
                    <span>x</span>
                    <span className="highlight"> &#8377; {data.attributes.price * data.attributes.quantity}</span>
                </div>
            </div>
        </div>    
        ))} 
    </div>
    );
};

export default CartItem;
