import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import config from './firebase_config';

const App = firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const now = new Date().getTime()

export default App;
