const uidElement = document.getElementById('uid-field')

const uid = document.cookie
  .split('; ')
  .find((row) => row.startsWith('user_id='))
  .split('=')[1]

console.log(uid)
uidElement.textContent = uid
