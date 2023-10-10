import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
 

const firebaseConfig = {
    apiKey: "AIzaSyCB9ukpNo35cFBuTEquIiQDBPg0s5wMUvQ",
    authDomain: "testehtmldatabase.firebaseapp.com",
    databaseURL: "https://testehtmldatabase-default-rtdb.firebaseio.com",
    projectId: "testehtmldatabase",
    storageBucket: "testehtmldatabase.appspot.com",
    messagingSenderId: "955577438350",
    appId: "1:955577438350:web:b22b15d95587ccda8539df",
    measurementId: "G-QWJ6FGXR1F"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

