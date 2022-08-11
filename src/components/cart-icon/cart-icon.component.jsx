import { useContext } from "react";
import "./cart-icon.styles.scss";

import { ReactComponent as Shopping } from "../../assets/111 shopping-bag.svg";

import { cartContext } from "../../context/cart-context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(cartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <Shopping className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
