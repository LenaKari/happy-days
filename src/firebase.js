import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import config from 'firebase_config';

const App = firebase.initializeApp(config);

export default App;
