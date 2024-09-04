import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, updateProfile} from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-GEW56R95WG"
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
//const storage = getStorage();
export const storage = getStorage(app);

//storage
export async function upload(file , currentUser, setLoading){
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true)
    const snapshot = await uploadBytes(fileRef,file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser,{photoURL});

    setLoading(false)
    alert("Uploaded File!")

}


