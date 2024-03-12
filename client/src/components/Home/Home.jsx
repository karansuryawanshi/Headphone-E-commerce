import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import {CategoriesContext} from "../../utils/context";

const Home = () => {
    const {categories, setCategories, products, setProducts} =useContext(CategoriesContext);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res)
            console.log("This is res: ", res)
        });
    };

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res)
            console.log("This is res: ", res)
        });
    };
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);


    return (
        <div>
            <Banner></Banner>
            <div className="main-content">
                <Category categories={categories}></Category>
                <Products headingText="Popular Products" products={products}></Products>
            </div>
        </div>

    )
};

export default Home;
