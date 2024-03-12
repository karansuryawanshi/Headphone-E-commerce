import "./Search.scss";
import {MdClose} from "react-icons/md"
import Prod from "../../../assets/products/earbuds-prod-1.webp"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"
import Product from "../../Products/Product/Product";
import { CategoriesContext } from "../../../utils/context";

const Search = ({setSearchModal}) => {
    // const {setShowSearch} = useContext(CategoriesContext);
const [query, setQuery]=useState("");
const navigate = useNavigate();
const onChange =(e)=>{
    setQuery(e.target.value);
}

let {data}= useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
if(!query.length){
    data = null;
}


    return (
        <div className="search-modal">
            <div className="from-field">
                <input type="text" autoFocus placeholder="search for products" value={query} onChange={onChange}/>
                <MdClose onClick={()=>setSearchModal(false)}/>
            </div>
            <div className="search-result-content">
                <div className="search-result">
                    {data?.data?.map(item =>(
                    <div key={item.id} className="search-result-items" onClick={()=>{
                        navigate("/product/"+ item.id)
                        setSearchModal(false)
                    }}>
                        <div className="img-container">
                            <img src={process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <span className="desc">{item.attributes.desc}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
