
const {readFile,writeFile} = require('fs');
console.log('start');
readFile('./Content/first.txt','utf-8',(err,result)=>{
if(err){
    console.log(err)
    return
}
const first = result;
readFile('./Content/textt/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result;
    writeFile('./Content/asyncc.txt',`the result is here the first test was ${first} and the second was ${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('done with this')
    });
})
})
console.log('starting the next one');