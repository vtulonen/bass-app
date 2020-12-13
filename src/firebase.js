import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui'
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCewWMOH6KuJRw8c3LsLUjHJIX971omc7w",
  authDomain: "bass-app-296717.firebaseapp.com",
  projectId: "bass-app-296717",
  storageBucket: "bass-app-296717.appspot.com",
  messagingSenderId: "565572522403",
  appId: "1:565572522403:web:00aa96c1de9b3f2db3ca16",
  measurementId: "G-4GTH70K8B9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();


// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = ({
  // signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],

  callbacks: {
    signInSuccessWithAuthResult: function(authResult) {
      // ui.reset();
      // document.getElementById('firebaseui').style.display = 'none';
      console.log(authResult);
      
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    }
  }

  // Other config options...

})
// ui.start('#firebaseui', {
  
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Other config options...
// });

const startFirebaseUI = function (elementId) {
  console.log("starting fbase");
  ui.start(elementId, uiConfig)
}

export default startFirebaseUI
