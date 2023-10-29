// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaX6f0GnzXGFcp_UpHcPtAgspNYrQYUSo",
  authDomain: "gif-app-1dec7.firebaseapp.com",
  projectId: "gif-app-1dec7",
  storageBucket: "gif-app-1dec7.appspot.com",
  messagingSenderId: "63368190437",
  appId: "1:63368190437:web:9cc794747a594d441db70c",
  measurementId: "G-6843BZEB32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const initFirebase = () => {
    return app;
}