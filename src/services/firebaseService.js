import firebase from 'firebase';


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
  const messaging = firebase.messaging();




export function initNotification() {
    Notification.requestPermission().then((permission) => { 

        console.log(permission)
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token =>");
                    console.log(currentToken);
                //   sendTokenToServer(currentToken);
                //   updateUIForPushEnabled(currentToken);
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
                  // Show permission UI.
                //   updateUIForPushPermissionRequired();
                //   setTokenSentToServer(false);
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // showToken('Error retrieving Instance ID token. ', err);
                // setTokenSentToServer(false);
              });
              
        }
     })
}