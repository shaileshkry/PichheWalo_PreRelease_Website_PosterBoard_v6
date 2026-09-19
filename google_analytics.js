<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5XC3GJiRqs4buLsLC3JHuy2z4edkqf5U",
    authDomain: "pichhewalo-dcf1a.firebaseapp.com",
    projectId: "pichhewalo-dcf1a",
    storageBucket: "pichhewalo-dcf1a.firebasestorage.app",
    messagingSenderId: "267528153205",
    appId: "1:267528153205:web:70c2688eaaa0fa62ee703c",
    measurementId: "G-GY2P4G4FBT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>