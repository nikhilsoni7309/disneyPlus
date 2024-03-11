import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAhNV_wjA8haBfrOKfUYmiEO8iXEkIP8eo",
    authDomain: "disneyplus-clone-57ae8.firebaseapp.com",
    projectId: "disneyplus-clone-57ae8",
    storageBucket: "disneyplus-clone-57ae8.appspot.com",
    messagingSenderId: "344817632799",
    appId: "1:344817632799:web:c49c54038527a1678cb72a",
    measurementId: "G-JJWYSVJPDC"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
  
const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage, collection};
export default db;