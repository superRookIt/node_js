/**
 * nconf
 */

var nconf = require('nconf');

nconf.env();

console.log('현재 사용하고 있는 os : '+nconf.get('os'));