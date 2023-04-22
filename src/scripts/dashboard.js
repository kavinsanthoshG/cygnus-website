const QRCode = require('qrcode-web')
const uidElement = document.getElementById('uid-field')
const buttonQrCode = document.getElementById('btn-show-qrcode')
const qrCodeElement = document.getElementById('qrcode')

const uid = document.cookie
  .split('; ')
  .find((row) => row.startsWith('user_id='))
  .split('=')[1]

console.log(uid)
uidElement.textContent = uid

buttonQrCode.addEventListener('click', (e) => {
  console.log('Showing your QR Code')
  let data = uid
  let qrcode = new QRCode.QRCode(qrCodeElement, uid)
})
