import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrsfMX9kr1qDMlw0eWSMvSj8bzAzd2Xek",
  authDomain: "nutriview-48d8b.firebaseapp.com",
  projectId: "nutriview-48d8b",
  storageBucket: "nutriview-48d8b.appspot.com",
  messagingSenderId: "361189393668",
  appId: "1:361189393668:web:facf325228ac12795dbc51",
  measurementId: "G-H0P5WHGWG7"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);

