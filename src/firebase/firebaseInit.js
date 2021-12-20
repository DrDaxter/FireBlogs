import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCp8YNa1QkKrwWqydO3N43RRJH6p1eQUjA",
    authDomain: "fireblogsyt-e2bd2.firebaseapp.com",
    projectId: "fireblogsyt-e2bd2",
    storageBucket: "fireblogsyt-e2bd2.appspot.com",
    messagingSenderId: "24214598193",
    appId: "1:24214598193:web:2b0ff4f5a8ca129fe85b10"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebase.firestore();