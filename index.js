'use strict'

const get = require('simple-get')
const PassThrough = require('stream').PassThrough

const url = 'http://173.164.254.148/vid.cgi?id=S150896_HLZT&doc=East%20Beach%20Webcam&i=1'
const expectedType = 'image/jpeg'

module.exports = goldenGate

function goldenGate () {
  const stream = new PassThrough()

  get(url, function (err, res) {
    if (err) return stream.emit('error', err)

    const actualType = res.headers['content-type']
    if (actualType !== expectedType) {
      stream.emit('error', new Error(`Unexpected Content-Type '${actualType}' (expected '${expectedType}')`))
    }

    res.pipe(stream)
  })

  return stream
}
