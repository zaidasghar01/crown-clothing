import { useContext } from "react";

import { cartContext } from "../../context/cart-context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemsToCart } =
    useContext(cartContext);

  const clearItemFromCartHandler = () => {
    return clearItemFromCart(cartItem);
  };

  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemsToHandler = () => {
    removeItemsToCart(cartItem);
  };
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemsToHandler}>
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
