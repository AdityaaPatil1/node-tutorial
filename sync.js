const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./Content/first.txt','utf8');
console.log(first);
const second = readFileSync('./Content/textt/second.txt','utf8');
console.log(second);
writeFileSync('./Content/Write-file-result.txt',
`the result is here the first test was ${first} and the second was ${second} `,
{flag : 'a'}
);
writeFileSync('./Content/first.txt',`CONTENT NOR FOUND ERRORRRRR`);
console.log(first);