import React, { useContext, useState, useEffect } from "react";
import fire from "../fire";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return fire.auth().createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return fire.auth().signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return fire.auth().signOut();
  }

  function resetPassword(email) {
    return fire.auth().sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function handleChangeUpload(img) {
    const storageRef = fire.storage().ref(`/images/${img.name}`);
    const task = storageRef.put(img);
    task.on(
      "state_changed",
      function progress(snapshot) {
        const percentege =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentege);
      },
      function complete() {
        fire
          .storage()
          .ref("images")
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            currentUser.image = url;
          });
      }
    );
    return currentUser.image;
  }

  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    handleChangeUpload,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}