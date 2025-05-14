
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// ← make sure this line is here and that your assets file exports `foodImages`
import { foodImages } from "@/assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // your real backend URL
  const url = "https://food-delivery-backend-5b6g.onrender.com";

  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  // fetch the list of foods, and then map in the correct image by _id
  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      const withImages = response.data.data.map((item) => ({
        ...item,
        image: foodImages[item._id] || "",
      }));
      setFoodList(withImages);
    } else {
      alert("Error! Products are not fetching..");
    }
  };

  const loadCartData = async (tok) => {
    try {
      const { data } = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token: tok } }
      );
      setCartItems(data.cartData || {});
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if (!token) return;
    try {
      const { data } = await axios.post(
        `${url}/api/cart/add`,
        { itemId },
        { headers: { token } }
      );
      data.success
        ? toast.success("Item added to cart")
        : toast.error("Could not add item");
    } catch (err) {
      console.error(err);
      toast.error("Network error adding item");
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 1) - 1, 0),
    }));
    if (!token) return;
    try {
      const { data } = await axios.post(
        `${url}/api/cart/remove`,
        { itemId },
        { headers: { token } }
      );
      data.success
        ? toast.success("Item removed from cart")
        : toast.error("Could not remove item");
    } catch (err) {
      console.error(err);
      toast.error("Network error removing item");
    }
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((sum, [id, qty]) => {
      if (qty > 0) {
        const item = food_list.find((f) => f._id === id);
        return sum + (item?.price || 0) * qty;
      }
      return sum;
    }, 0);
  };

  useEffect(() => {
    (async () => {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    })();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        url,
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
