// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Config = {
  apiKey: "AIzaSyCucvGz-5SjGDNK-ggA-RJvE6rI_3Z88Rs",
  authDomain: "headphone-otp.firebaseapp.com",
  projectId: "headphone-otp",
  storageBucket: "headphone-otp.appspot.com",
  messagingSenderId: "468565308845",
  appId: "1:468565308845:web:9e2199c1d1e773d661dd24",
};

export default firebase;
firebase.initializeApp(Config);
const auth = firebase.auth();
export { auth };
