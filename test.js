'use strict'

const test = require('tape')
const isJpg = require('is-jpg')
const spawn = require('child_process').spawn
const goldenGate = require('./')

test('api', function (t) {
  t.plan(1)

  goldenGate()
    .once('data', function (data) {
      t.ok(isJpg(data), 'returns jpg data')
    })
    .once('error', t.end)
})

test('cli', function (t) {
  t.plan(1)

  const gg = spawn('node', ['./cli.js'])

  gg.stdout.once('data', function (data) {
    t.ok(isJpg(data), 'returns jpg data')
  })
})
