//object sathich for-in loop used krte
//in loop madhe keys return krte
var car={
    carname:'swift',
    price: 800000,
    color:'white',
}
for(var i in car){
    //console.log(${i} ',' ->${car[i]});
    console.log(i,'',car[i]);// key:value
    
}

// in-loop: keys return 
//in:keyword
for(let t in car){
    console.log(car[t]);
}
for(let t in car){
   if(t=='price'){
    console.log(car[t]);
}
    //console.log(t);
}
console.log(car.price);//jar looping nahi lavta aali aani price chi value print karaychi asel tevha..

let cars =['swift','i10','ennovo','scoda']
for(let keys in cars){
    console.log(cars[keys]);
}


//for-of loop arrey vr used hotte
let name1=['tanaya','bagekar','harshdeep','hrushikesh']
for(let i of name1){
    console.log(i);
    if(i== 'harshdeep'){
        
       break;
     //continue;
    }
    console.log(i);
}
//while-loop
let h=20;
while(h>=5){
    console.log(h);
    h--;
}

//do-while loop
var b=4;
do{
console.log(b);
b ++;
}
while(b < 7)