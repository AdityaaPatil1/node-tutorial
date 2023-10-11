//  import secondmod from './secondmod';
//  import names from './firstmodules';
const names = require('./firstmodules')
const sayMyName = require('./secondmod')
sayMyName(names.yash);
sayMyName(names.aditya);
require('./mind-grenade');
   // console.log(names.yash);
   // console.log(names.aditya);
   // console.log(names.local); because it is not been imported 

  
