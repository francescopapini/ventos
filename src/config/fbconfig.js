/* eslint-disable indent */
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyB35y5bDbWS0EJ8jfO1W7f5-tmZ2_isSds',
    authDomain: 'ventosdocumbuco-1542394246592.firebaseapp.com',
    databaseURL: 'https://ventosdocumbuco-1542394246592.firebaseio.com',
    projectId: 'ventosdocumbuco-1542394246592',
    storageBucket: '',
    messagingSenderId: '862674110426',
};

firebase.initializeApp(config);
export const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true });
