import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const snap = await getDoc(doc(db, "users", user.uid));

  if (snap.exists()) {

    document.getElementById("welcome").textContent =
      "Welcome, " + snap.data().fullname;

    document.getElementById("balance").textContent =
      "$" + Number(snap.data().balance).toFixed(2);

  }

});
