import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX1aup2Rx4j1I5FjrmKZFSBWfNLoa99XM",
  authDomain: "kolachimart.firebaseapp.com",
  messagingSenderId: "756851683626",
  appId: "1:756851683626:web:77faf1c3d7914ee4"
};
const abc = firebase.initializeApp(firebaseConfig);

export default abc;
