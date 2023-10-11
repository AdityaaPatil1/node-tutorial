const _ = require('lodash');
const a = [1,[2,[3,[4]]]];
const b = _.flattenDeep(a);
console.log(b);