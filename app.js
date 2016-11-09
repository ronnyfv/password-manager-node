
var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('name', 'Ronny');

var name = storage.getItemSync('name');
console.log(name);
