import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop";
import Contact from "./routes/contact/contact.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";
import ProtectedRoutes from "./components/Protected-routes";
import DefaultRoute from "./components/DefaultRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="shop/*" element={<Shop />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route element={<DefaultRoute />}>
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
