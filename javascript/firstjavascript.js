let a=2;//declaration + defination
let b;//declaration
b=4;//defination
let name1="tanaya";
console.log(name1);
let my_name="tanaya1";
let myname="tanaya2";
let MYNAME="tanaya3";
console.log(a);
console.log('a',a);
console.log(a,'a');
console.log('a' + a);
console.log("a" + a);
console.log('a' +a+b);
console.log('a'+a-MYNAME);
console.log('a',a+b);
console.log('a' ,a+MYNAME);
console.log('a-->',a+'b-->',b);
console.log();
let d=40;
console.log(d);
console.log(d*30);
console.log('abc'+30);
console.log('abc'+20+11);
console.log(11+20+'abc'+20+11);
// js data type: string, boolean, null, undefined, number, object
//string
let first_sec="tanaya";
let first_sec1='tanaya';
let first_sec2="";
let first_sec3='';
console.log(typeof(first_sec));

let tanaya=30;
let shrusti='30';
console.log(tanaya == shrusti);//assign operator :eg(let a=30);equality operator: eg(a==b); ===: it will check data type as well as value of variable
console.log(shrusti === tanaya);
let p= true; //boolean= true /false
console.log(typeof(p));
let r= 'true';
console.log(typeof(r));
let c1 = null;
console.log(typeof(C));
console.log(c1);
let W1;
console.log(W1);
console.log(typeof(W1));
let n=50;
console.log(typeof(n));
let d5={};
console.log( typeof(d5));
let d7=[];
console.log(typeof(d7));
let d9=40.9;
console.log(typeof(d9));

function xyz(){
    console.log("tttttttttttttttttttttttttttt"); //3.19 :3.2
    let d2=9999999999999999 // 16 times 9999999999999999 = 1000000000
    console.log(d2);
    let d3=999999999999999n;
    let d11='11111111111111';
    console.log(d3+ ' ' +d11);
    console.log(d3);
    let d1= BigInt(22222222222222222);
    console.log(d1);
    console.log(typeof(d3)+typeof(d1));

    let d12=Symbol('tanaya');
    console.log(d12);
    console.log(d12.description);
    console.log(typeof(d12));
}