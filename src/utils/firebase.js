import { signInWithEmailAndPassword } from 'firebase/auth'

export async function signIn(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(email, password)
    const error = false
    return { user, error }
  } catch (error) {
    console.error(error)
    const user = false
    return { user, error }
  }
}
