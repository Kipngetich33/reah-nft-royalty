import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXA2gKD0hQzIKJc_s6H1WEMhkuu5Jzn2w",
  authDomain: "nftroyalty-364ae.firebaseapp.com",
  projectId: "nftroyalty-364ae",
  storageBucket: "nftroyalty-364ae.appspot.com",
  messagingSenderId: "552891729732",
  appId: "1:552891729732:web:ac863e5fadad07c5c63911"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
