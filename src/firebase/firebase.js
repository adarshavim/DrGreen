import { config } from './config';
import firebase from 'firebase';

firebase.initializeApp(config);

const settings = {timestampsInSnapshots: true};
firebase.firestore().settings(settings);
export const firestore = firebase.firestore();

export const firebasestore = firebase.firestore;