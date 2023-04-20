import { initializeApp } from 'firebase/app'
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

const app = initializeApp(firebaseConfig)

var loginForm = document.querySelector('form')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  console.log(email, password)
  const { user, error } = signIn(email, password)
  console.log(user)
})
