let name1='tanaya';
console.log('length',name1.length);
var name2= name1.slice(2,5)
console.log(name2);
var name3=name1.slice(-3,-1);
console.log(name3);

var carname='mini cupar'
console.log(carname.substring(1,5));
console.log(carname.substring(5));
console.log(carname.substring(-3,-1));
console.log(carname.substring(-3,3));
console.log(carname.substring(5,-3));// -3= 0 is consider
console.log(parseFloat(carname));