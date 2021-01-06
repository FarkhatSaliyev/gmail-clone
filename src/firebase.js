import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAS_axrN-r-QiZgpIjeqq4e4-KWag6eqKI",
  authDomain: "clone-ec96b.firebaseapp.com",
  projectId: "clone-ec96b",
  storageBucket: "clone-ec96b.appspot.com",
  messagingSenderId: "335609933353",
  appId: "1:335609933353:web:26f06599a97441fa93f638",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }