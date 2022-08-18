import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemsFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selecter";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemFromCartHandler = () => {
    return dispatch(clearItemFromCart(cartItems, cartItem));
  };

  const addItemToCartHandler = () => {
    return dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemsToCartHandler = () => {
    return dispatch(removeItemsFromCart(cartItems, cartItem));
  };
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemsToCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromCartHandler}>
        X
      </div>
    </div>
  );
};

export default CheckoutItem;
