'use strict'

const get = require('simple-get')
const parse = require('xml2js').parseString

const url = 'http://173.164.254.148/ptz.cgi?doc=East%20Beach%20Webcam&xml=1&cmd=open&version=20100917'
const expectedType = 'text/xml'

module.exports = id

function id (callback) {
  get.concat(url, function (err, res, xml) {
    if (err) return callback(err)

    const actualType = res.headers['content-type']
    if (!actualType || !actualType.startsWith(expectedType)) {
      return callback(new Error(`Unexpected Content-Type '${actualType}' (expected '${expectedType}')`))
    }

    parse(xml, function (err, data) {
      if (err) return callback(err)

      const id = data.entries.entry.find((entry) => entry.$.key === 'id').$.value
      if (!id) return callback(new Error('no id found'))
      callback(null, id)
    })
  })
}
