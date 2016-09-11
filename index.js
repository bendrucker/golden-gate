'use strict'

const get = require('simple-get')
const PassThrough = require('stream').PassThrough
const id = require('./id')

const expectedType = 'image/jpeg'

module.exports = goldenGate

function goldenGate () {
  const stream = new PassThrough()

  id(function (err, id) {
    if (err) return stream.emit('error', err)

    const url = `http://173.164.254.148/vid.cgi?id=${id}&doc=East%20Beach%20Webcam&i=1`

    get(url, function (err, res) {
      if (err) return stream.emit('error', err)

      const actualType = res.headers['content-type']
      if (actualType !== expectedType) {
        stream.emit('error', new Error(`Unexpected Content-Type '${actualType}' (expected '${expectedType}')`))
      }

      res.pipe(stream)
    })
  })

  return stream
}
