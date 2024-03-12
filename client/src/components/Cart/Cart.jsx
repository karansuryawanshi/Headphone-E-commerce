import "./Cart.scss";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import { useContext } from "react";
import { CategoriesContext } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js"
import { makePaymentRequest } from "../../utils/api";

const Cart = () => {    
    const {cartItems, cartSubtotal, setShowCart} = useContext(CategoriesContext);

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

    const handlePayment = async () => {
        // try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        // } catch (err) {
            // console.log(err);
        // }
    };


    return (
        <div className="cart-pannel">
            <div
                className="opac-layer" onClick={() => setShowCart(false)}></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=> setShowCart(false)}>
                        <MdClose/>
                        <span className="text">close</span>
                        </span>
                </div>
                {!cartItems?.length && 
                <div className="empty-cart">
                    <BsCartX/>
                    <span>No Product in Cart.</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div>}

                {!!cartItems?.length && <>
                <CartItem/>
                <div className="cartFooter">
                    <div className="subtotal">
                        <div className="text">Subtotal</div>
                        <div className="text total">&#8377;{cartSubtotal}</div>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    );
};

export default Cart;
