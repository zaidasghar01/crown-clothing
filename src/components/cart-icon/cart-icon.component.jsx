import { useDispatch, useSelector } from "react-redux";
import "./cart-icon.styles.scss";

import { ReactComponent as Shopping } from "../../assets/111 shopping-bag.svg";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selecter";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <Shopping className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
