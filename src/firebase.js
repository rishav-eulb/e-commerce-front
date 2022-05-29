import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCvsDNn_xjUl9Cu2HfD_eZvw-GoNW1yqW8",

  authDomain: "ecommerce-a1387.firebaseapp.com",

  projectId: "ecommerce-a1387",

  storageBucket: "ecommerce-a1387.appspot.com",

  messagingSenderId: "213124781387",

  appId: "1:213124781387:web:fa607da808c955799b84ce"


};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
