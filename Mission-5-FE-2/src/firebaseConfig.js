// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_nqbldi5hG-kfMZfZa98S-Eu3mS_ybJM",
  authDomain: "fsd-database.firebaseapp.com",
  databaseURL:
    "https://fsd-database-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "fsd-database",
  storageBucket: "fsd-database.firebasestorage.app",
  messagingSenderId: "157939532151",
  appId: "1:157939532151:web:ed0e3fc1ea81d982f62172",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };
