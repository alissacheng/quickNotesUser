import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAQAZ8FYOV6h7iPN4L_rp0SSE0Um1jp704",
  authDomain: "fir-react-athentication.firebaseapp.com",
  databaseURL: "https://fir-react-athentication.firebaseio.com",
  projectId: "fir-react-athentication",
  storageBucket: "fir-react-athentication.appspot.com",
  messagingSenderId: "658384457017",
  appId: "1:658384457017:web:4729276b456f8419956ce8"
};
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
const storage = firebase.storage();
const auth = firebase.auth();

export{
  auth, storage, firebase as default
}