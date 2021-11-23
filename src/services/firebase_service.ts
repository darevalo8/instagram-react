
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const FIREBASECONFIG = {
  apiKey: "AIzaSyAdVcZIX0t64WGEh3VYjUTDE2Jsk2l-lCQ",
  authDomain: "boulevard-darevalo.firebaseapp.com",
  databaseURL: "https://boulevard-darevalo.firebaseio.com",
  projectId: "boulevard-darevalo",
  storageBucket: "boulevard-darevalo.appspot.com",
  messagingSenderId: "643520954342",
  appId: "1:643520954342:web:2ceea40162740f14d9e027",
  measurementId: "G-D8JL9WKH75"
};

firebase.initializeApp(FIREBASECONFIG);
export const auth:any = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });



export default firebase;