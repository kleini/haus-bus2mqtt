const fs = require('fs')
const path = require('path')
const mqtt = require('mqtt')
const HomieDevice = require('homie-device')

var serverCert = fs.readFileSync(path.join(__dirname, '/ca.crt'))

var options = {
  clientId: 'haus-bus2mqtt',
  host: 'IP',
  port: 1883,
  protocol: 'mqtts',
  username: 'username',
  password: 'password',
  ca: serverCert
}

var client = mqtt.connect(options)

client.on('connect', function() {
  console.log('connected')
  setTimeout(() => {
    client.end()
  }, 2000)
})
