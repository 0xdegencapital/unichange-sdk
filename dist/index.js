
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./unirektswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./unirektswap-sdk.cjs.development.js')
}
