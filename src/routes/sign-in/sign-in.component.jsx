import Signup from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in.styles.scss";

const SignInAuth = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <Signup />
    </div>
  );
};
export default SignInAuth;
