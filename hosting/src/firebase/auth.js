export function signUpWithEmailPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginWithEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function SignInWithTwitter() {
  return signInWithRedirect(auth, new TwitterAuthProvider());
}

export function onAuthChanged(setCurrentUser) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
}

export function signOut() {
  return auth.signOut();
}
