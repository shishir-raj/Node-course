//When exporting like module.exports  = {var1,var2}
//const names = require('./app.js')
//Then use sayHi(names.var1)
//or
//use this below when you are exporting modules like module.exports.name  = {var1,var2}
require('./2-app.js');
const inter = require('./2-sayHi.js');
const data =require('./2-app.js');

console.log(inter); 
console.log(data)

inter.sayHi(data.file1exports.person.age);

inter.sayHi(data.file1exports.var2);
inter.sayHi(data.file1exports.var1);
console.log(inter.var1);

inter.sayHi('gigi');
 