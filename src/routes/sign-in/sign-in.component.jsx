import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocument(user);
  };
  return (
    <div>
      <div>
        <h1>sign in</h1>
      </div>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};

export default signIn;
