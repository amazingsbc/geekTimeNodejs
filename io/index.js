const glob = require('glob');

// var result = null;
// console.time('a');
// result = glob.sync(__dirname + '/**/*');
// console.timeEnd('a');
// console.log(result);


var result = null;
console.time('a')
glob(__dirname + '/**/*', (err, res)=>{
    result = res;
    console.log(result); 
})
console.timeEnd('a');