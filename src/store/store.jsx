import { createContext, useState, useReducer } from "react";
import Popup from "../components/popup";
import { products } from "../utils/products";
import ErrorPopup from "../components/errorPopus";

export const furniture_store = createContext([]);

const cartItemReducer = (currentCart, update) => {
  let latestCart = currentCart;
  console.log(update);
  if (update.type === "ADD") {
    const itemId = currentCart.map((itm) => itm.id);
    if (!itemId.includes(update.payload.id)) {
      latestCart = [...currentCart, update.payload];
    }
  } else if (update.type === "DELETE") {
    latestCart = currentCart.filter((itm) => itm.id !== update.payload.id);
  }

  return latestCart;
};


function FurnitureContextProvider({ children }) {
  const [popup, setPopup] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const [cartItemUpdate, itemDispatcher] = useReducer(cartItemReducer, []);

  const addInCart = (itm) => {
    const update = {
      type: "ADD",
      payload: itm,
    };

    itemDispatcher(update);
  };

  const removeFromCart = (itm) => {
    const update = {
      type: "DELETE",
      payload: itm,
    };

    itemDispatcher(update);
  };

  const handleSetPopup = (product) => {
    const itemId = cartItemUpdate.map((itm) => itm.id);

    if (itemId.includes(product.id)) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };

  const handleSetNull = () => {
    setPopup(null);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <furniture_store.Provider
      value={{
        cartItemUpdate,
        products,
        popup,
        darkMode,
        handleSetPopup,
        addInCart,
        removeFromCart,
        handleSetNull,
        handleDarkMode,
      }}
    >
      <div className={`dark:bg-black ${darkMode ? "dark" : ""}`}>
        {popup === null ? null : popup ? <Popup /> : <ErrorPopup></ErrorPopup>}
        {children}
      </div>
    </furniture_store.Provider>
  );
}

export default FurnitureContextProvider;
