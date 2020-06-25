import firebase from 'firebase/app'
import '@google-cloud/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC2OpY8Wq42N2j-YkkpB0YpOPSGN4mv6F4",
  authDomain: "doggo-589a4.firebaseapp.com",
  databaseURL: "https://doggo-589a4.firebaseio.com",
  projectId: "doggo-589a4",
  storageBucket: "doggo-589a4.appspot.com",
  messagingSenderId: "833007536837",
  appId: "1:833007536837:web:dad106904ebce41e67beac",
  measurementId: "G-6RWVRFZV0E"
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

window.firebase = firebase

export default firebase
