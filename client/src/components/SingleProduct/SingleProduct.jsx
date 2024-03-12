import "./SingleProduct.scss";
import { useState, useContext } from "react";
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus} from "react-icons/fa";

import RelatedProducts from "./RelatedProducts/RelatedProducts"
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';
import {CategoriesContext} from "../../utils/context" 
import img from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const {handleAddToCart } = useContext(CategoriesContext)

    if (!data) return;
    const product = data.data[0].attributes;

    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    }

    const decrement = () => {
        setQuantity((prevState) =>{
            if (prevState === 1) return 1
            return prevState - 1;
            });
    }

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="single-product-images">
                    {/* <div className="sub-img">
                        <img className="sub-img-1" src={img} alt="" />
                        <img className="sub-img-1" src={img} alt="" />
                        <img className="sub-img-1" src={img} alt="" />
                        <img className="sub-img-1" src={img} alt="" />
                    </div> */}
                    <div className="left">
                        <img
                            src={process.env.REACT_APP_DEV_URL + product?.img?.data[0]?.attributes?.url}/>
                        </div>
                    </div>
                    <div className="right">
                        <span className="name">{product.Title} </span>
                        <span className="price">{product.price}</span>
                        <span className="desc">{product.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() => {
                                handleAddToCart(data.data[0],quantity)
                                setQuantity(1)
                            }}>
                                <FaCartPlus size={20}></FaCartPlus>
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider"></span>
                        <div className="info-item">
                            <span className="text-bolt">
                                Category:<span> {product.categories.data[0].attributes.Title}</span>
                            </span>
                            <span className="text-bolt">
                                share: 
                                <span>
                                <FaFacebook size={16}></FaFacebook>
                                <FaTwitter size={16}></FaTwitter>
                                <FaInstagram size={16}></FaInstagram>
                                <FaLinkedinIn size={16}></FaLinkedinIn>
                                <FaPinterest size={16}></FaPinterest>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts
                    productId = {id}
                    categoryId = {product.categories.data[0].id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;