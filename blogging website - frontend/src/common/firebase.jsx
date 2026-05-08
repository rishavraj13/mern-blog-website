// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPdjnmS7Cj8NcnoiPO2bSE5iZ8YkhJukM",
    authDomain: "mern-blog-6334f.firebaseapp.com",
    projectId: "mern-blog-6334f",
    storageBucket: "mern-blog-6334f.firebasestorage.app",
    messagingSenderId: "127394171972",
    appId: "1:127394171972:web:8c57afffad3fa6d9014011",
    measurementId: "G-GCT1WEHE6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// google Auth
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user
        })
        .catch((err) => {
            console.log(err)
        })

    return user;

}