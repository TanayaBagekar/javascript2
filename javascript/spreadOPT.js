// spreadoperator(...) : quickly copy all part or full arrey/object item 
let color=['pink','blue','grey','white','black','yellow'];
let [color5,color3,apple,...clr3]= color;
console.log(typeof(apple));
console.log(apple);

let name1=['tanaya','shrushti','hrushi']
let color2= color;
console.log(color2);
/*for (let index=0;indesx < color.length; index++){
    console.log(color1);
}
console.log(color1);*/
let color1=[...color , ...name1];
console.log(color1);

let fruits ={
    fruitname: 'apple',
    color : 'red',
    price : 30
}

let updatedfruit = {
    fruitname: 'apple1',
    color : 'orange',
    size : 'big',
    fav : 'yes',
}

let newfruit = {...updatedfruit, ...fruits};//multiple arrey
console.log(newfruit);
 
let new1={...fruits};//single arrey in spread_operator
console.log(new1);

//some part in arrey 
