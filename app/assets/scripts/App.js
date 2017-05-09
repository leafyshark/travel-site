var $ = require('jquery');
var Person = require('./modules/Person');

alert("This is a test for our webpack automation");

var john = new Person("John Doe", "blue");
john.greet();

var tay = new Person ("Taylor Reeves", "Sea");
tay.greet();

// hi