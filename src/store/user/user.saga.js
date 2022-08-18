import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
} from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";
import {
  getCurrentUser,
  createUserDocument,
  signInWithGooglePopup,
  signInWithEmail,
  signOutUser,
  createAuthUser,
} from "../../utils/firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmail, email, password);
    yield call(getSnapshotFromUserAth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUser, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAth, user, additionalDetails);
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* getSnapshotFromUserAth(userAuth, additionalInfo) {
  try {
    const userSnapshot = yield call(
      createUserDocument,
      userAuth,
      additionalInfo
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignInWithEmailAndPassword() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCES, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onSignInWithEmailAndPassword),
    call(onGoogleSignIn),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
