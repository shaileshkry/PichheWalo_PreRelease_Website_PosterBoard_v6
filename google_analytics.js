// =========================================================
// PichheWalo - Google Analytics
// Firebase Web Analytics
// =========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";

// Firebase configuration
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

// Initialize Google Analytics
const analytics = getAnalytics(app);

// Make analytics available globally
window.pichheWaloAnalytics = analytics;

console.log("PichheWalo Google Analytics initialized successfully.");