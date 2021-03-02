import firebase from 'firebase/app';
import 'firebase/functions';

//TODO: repalce with your firebase config
const firebaseConfig = {
	apiKey: 'dummy',
	authDomain: 'dummy',
	databaseURL: 'dummy',
	projectId: 'dummy',
	storageBucket: 'dummy',
	messagingSenderId: 'dumy',
	appId: 'dummy',
};

const app = firebase.initializeApp(firebaseConfig);

export const functioons = app.functions();
