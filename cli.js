#!/usr/bin/env node

'use strict'

const goldenGate = require('./')

goldenGate().pipe(process.stdout)
