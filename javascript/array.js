let varName='tanaya';
console.log(typeof('varname'));

let my_name=['manisha',77777,8888888,'shrushti','pratik','yash','tanaya','yogesh'];

console.log(typeof(my_name));
console.log(my_name);
console.log(my_name.lenght);
console.log(my_name[0]);
console.log(my_name[my_name.lenght-1]);
my_name[2]='tanaya';
console.log(my_name);
my_name[9]='pink';
console.log(my_name);
console.log(my_name[7]);

var cars=['volvo','i20','indigo','sccorpio','scoda'];
let newcars=cars.toString();
console.log('newcars',newcars);
console.log(cars.toString())   // array_name.method_name
console.log(cars.join("$"));
console.log(cars.join(" "));
console.log(cars.join("\n")); //line break
console.log(cars);
console.log(cars.pop());
var cars1=['volvo','i20','indigo','scorpio','scoda'];
cars1.push('minu cupar');
console.log(cars1);
console.log(cars1.shift());
console.log(cars1);
cars1.unshift('fortune');
console.log(cars1);

delete cars1[4];
console.log(cars1);

var no1=[10.30,40,40,50];
var no2=[60,70,80,90,100];
var no='1190';
var conNo1 =no1.concat(no2);
console.log(conNo1);
var conNo2=no2.concat(no1);
console.log(conNo2);
var conNo3=no1.concat(no);
console.log(conNo3);
let abc;
var conNo= no2.concat(no,no1,abc);
console.log(conNo);

var coca=['thumbsup','milk', 'tea','cofee','cola'];
coca.splice(1,0, 'masala');//(1,0)=1 is index  item and 0 is no. of items to be removed;
coca.splice(-2,1,'lemone','kiwi');
console.log(coca);
coca.splice(2,2,'mirinda');
console.log(coca);
console.log(coca.slice(1,3));
//console.log(coca.slice(-1,0));
const fruits=["apple","banana","kiwi","mango","lemon","chiku"];
const fruits1= fruits.slice(1,3);
console.log('fruits1 +',fruits1);
const fruits2=["ple","nana","kiwi","mango","lemon","chiku"];
const fruits3=fruits2.slice(-3,-1);
console.log('fruits3 -',fruits3);
