import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocument,
} from "./utils/firebase/firebase.utils";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop";
import Contact from "./routes/contact/contact.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
