import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { cartContext } from "../../context/cart-context";

import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {
  const { cartItems } = useContext(cartContext);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="span">Your cart is empty </span>
        )}
      </div>
      <Button onClick={navigateHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
