importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyDcJk6YisLoHmx9QbM6zKSVrMVKfMj-HAg",
    authDomain: "notificationapp-743f3.firebaseapp.com",
    databaseURL: "https://notificationapp-743f3.firebaseio.com",
    projectId: "notificationapp-743f3",
    storageBucket: "notificationapp-743f3.appspot.com",
    messagingSenderId: "792807184593",
    appId: "1:792807184593:web:3555c7fdd2bc9b67aecdf0"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();