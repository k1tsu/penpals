import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfig from './keys';

// DON'T FORGET TO ADD YOUR OWN KEYS.
// YOUR CAN USE THE FILE I CREATED (keys.model.js) IN THE FOLDER AS A MODEL.
// IT WON'T WORK IF YOU DON'T PUT YOUR OWN KEYS!

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
