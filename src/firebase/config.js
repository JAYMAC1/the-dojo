import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDW7bgJ7g4jiSVfMdB2RpUwBtePTBDcqAI',
  authDomain: 'thedojosite-c4964.firebaseapp.com',
  projectId: 'thedojosite-c4964',
  storageBucket: 'thedojosite-c4964.appspot.com',
  messagingSenderId: '568756439756',
  appId: '1:568756439756:web:1dc6501b1304f1762f1069',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
