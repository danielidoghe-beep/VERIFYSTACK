import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHVC4cmowYZBNqSwPFcwTAfkrrqfngBFE",
  authDomain: "verifystack-324d2.firebaseapp.com",
  projectId: "verifystack-324d2",
  storageBucket: "verifystack-324d2.firebasestorage.app",
  messagingSenderId: "436518347662",
  appId: "1:436518347662:web:f4641a347caa76692e7adf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
