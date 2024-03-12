import { useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const CategoriesContext = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [showSearch, setShowSearch] = useState();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems.map((data) => (count += data.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.forEach(
      (data) => (subTotal += data.attributes.price * data.attributes.quantity)
    );
    setCartSubtotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        showCart,
        cartSubtotal,
        setCartSubtotal,
        handleAddToCart,
        setShowCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default AppContext;
