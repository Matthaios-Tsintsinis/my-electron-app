import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnkgwOgDhLYDeGfcicktT43e89vVDVi6w",
  authDomain: "realtimeqttest.firebaseapp.com",
  databaseURL: "https://realtimeqttest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "realtimeqttest",
  storageBucket: "realtimeqttest.appspot.com",
  messagingSenderId: "859784739739",
  appId: "1:859784739739:web:f7e97535edabbecbe6ff3e",
  measurementId: "G-1TKRXEGR6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


let database = firebase.database();

// var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });