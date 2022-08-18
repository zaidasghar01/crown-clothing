import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signOutStart } from "../../store/user/user.action";
import { selectIsCartOpen } from "../../store/cart/cart.selecter";
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => {
    return dispatch(signOutStart());
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-logo" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser} to="/">
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
