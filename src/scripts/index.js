import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { signIn } from '../utils/firebase'
// require('dotenv').config()

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyDneGAykvr0p0NJY1AATARk-Jwmof35iTo',
  authDomain: 'cygnus-website-84638.firebaseapp.com',
  projectId: 'cygnus-website-84638',
  storageBucket: 'cygnus-website-84638.appspot.com',
  messagingSenderId: '778268716209',
  appId: '1:778268716209:web:1dd335cdd9f06030058690',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const loginForm = document.querySelector('form')

// Login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  console.log(email, password)
  const { user, error } = await signIn(email, password)
  if (user) {
    console.log(user)

    // Set cookie
    document.cookie = `user_id=${
      user.uid
    }; authenticated=true; expires=${new Date(
      Date.now() + 86400000,
    ).toUTCString()}; path=/`

    // Pushing the user object to firestore with the key "isEligibleForFood"
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      isEligibleForFood: true,
    })

    // Navigate the page to dashboard.html
    window.location.href = 'dashboard.html'
  } else {
    document.cookie = 'authenticated=false; path=/'
  }
})
